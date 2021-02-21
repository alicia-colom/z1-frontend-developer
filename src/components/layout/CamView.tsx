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

	// TODO:  1) Desde el time-out...
	// TODO:  2) ...Accionar la camara 1 vez
	// TODO:  3) Guardar la foto tomada en el estado-photo

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!props.isApproved) {
				connectToApi(props.photo).then((result) => {
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
