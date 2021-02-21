import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Webcam from 'react-webcam';
import CamCapture from './CamCapture';
import { connectToApi } from '../../services/Api';
import '../../stylesheets/layout/CamView.scss';

const CamView = (props: HandleStateProps) => {
	const [counter, setCounter] = useState<number>(1);

	const handleCancel = () => {
		props.handleOutcomeValue('cancel');
		props.handleIsApprovedValue(false);
		<Redirect push to={'/'} />;
	};

	const videoConstraints = {
		audio: false,
		width: { max: 1920 },
		height: { max: 1080 },
	};
	const webcamRef = React.useRef(null);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!props.isApproved) {
				const photoTaken = webcamRef.current.getScreenshot();

				props.handlePhotoValue(photoTaken);

				connectToApi(photoTaken).then((result) => {
					props.handleOutcomeValue(result.summary.outcome);
					props.handleIsApprovedValue(result.summary.outcome);

					setCounter(counter + 1);
					console.log(
						'API call #',
						counter,
						'. Response:',
						result.summary.outcome
					);
				});
			}
		}, 60000);

		return () => clearTimeout(timeout);
	}, [counter, props]);

	// TODO: Revisar si es posible timeout antes del renderizado de CamView
	if (props.isApproved) {
		// setTimeout(() => {
		return <Redirect push to={'/'} />;
		// }, 1200);
		// return () => clearTimeout();
	}

	return (
		<div className="cam-view">
			<section className="cam-view__info">
				<h2 className="cam-view__info--title">Take picture</h2>
				<p className="cam-view__info--text">
					Fit your ID card inside the frame.
					<br />
					The picture will be taken automatically.
				</p>
			</section>

			<section className="cam-view__capture">
				<div
					className={
						!props.outcome || !props.photo
							? 'cam-view__capture--image'
							: props.isApproved
							? 'cam-view__capture--image border-accepted'
							: 'cam-view__capture--image border-rejected'
					}
				>
					<Webcam
						audio={false}
						width={289}
						// height={179}
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						videoConstraints={videoConstraints}
					/>
				</div>

				{/* {props.photo && props.outcome && !props.isApproved ? null : ( */}
					<div className="cam-view__capture--msg">
						<p className="cam-view__capture--msg text">
							<i
								className={
									'cam-view__capture--msg icon far ' +
									(props.isApproved ? 'fa-check-circle' : 'fa-lightbulb')
								}
							></i>
							{props.isApproved ? 'Picture taken!' : 'Room lighting is too low'}
						</p>
					</div>
				{/* )} */}
			</section>

			{/* <CamCapture
				photo={props.photo}
				outcome={props.outcome}
				isApproved={props.isApproved}
			/> */}

			<Link
				to="/"
				title="Back to home"
				className="cam-view__cancel-btn"
				onClick={handleCancel}
			>
				Cancel
			</Link>
		</div>
	);
};

export default CamView;
