import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Webcam from 'react-webcam';
import CamCapture from './CamCapture';
import { connectToApi } from '../../services/Api';
import '../../stylesheets/layout/CamView.scss';

// interface VideoConstraints {
// 	audio: boolean;
// 	video: { width: { max: number }; height: { max: number } };
// }

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
				props.handlePhotoValue(photoTaken);
			}
		}, 1200);

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

				<Webcam
					audio={false}
					width={289}
					// height={179}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					videoConstraints={videoConstraints}
				/>

				<CamCapture
					photo={props.photo}
					outcome={props.outcome}
					isApproved={props.isApproved}
				/>


				
			</section>

			<Link
				to="/"
				title="Back to home"
				className="cam-view__link"
				onClick={handleCancel}
			>
				Cancel
			</Link>
		</div>
	);
};

export default CamView;
