import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CamView from '../CamView';

import { connectToApi } from '../../services/Api';
import '../../stylesheets/layout/CardFrame.scss';
import CardIdDefault from '../../images/ID_bg.svg';

const CardFrame = () => {
	// TODO: Borrar cuando fetch implementado
	const cardFake: string =
		'https://www.ocu.org/-/media/ocu/images/home/dinero/tarjetas/tarjeta_aqua_1600x900.jpg?rev=9dccc2d8-2b35-4405-bcf8-f019e635d302&mw=660&hash=46412196F3F1289D8F64934517C15C14';

	// INITIAL VALUES
	const initialPhoto: string = '../../images/ID_bg.svg';
	const initialOutcome: string = 'ssss';

	// STATES
	const [photo, setPhoto] = useState(cardFake);
	const [outcome, setOutcome] = useState(initialOutcome);
	const [isApproved, setIsApproved] = useState(false);

	// const isApproved: boolean = outcome === 'Approved';

	// FUNCTIONS
	const handleTakePicture = () => {
		<CamView photo={photo} outcome={outcome} isApproved={isApproved} />;

		console.log('Poner un timeout');
		console.log('Accionar la cámara');

		// Setear estado-photo con la foto capturada
		setPhoto('respuesta de la cámara');

		// connectToApi(photo);

		connectToApi(photo)
			.then((result) => {
				setOutcome(result.summary.outcome);

				console.log(result);
				console.log(result.summary.outcome);
				console.log(outcome);
			})
			.then(() => {
				setIsApproved(outcome === 'Approved');
			})

			.then(() => {
				console.log(outcome, isApproved);
			});
	};

	return (
		<>
			<section className="card-frame">
				<div
					className={
						!outcome || !photo
							? 'card-frame__photo'
							: isApproved
							? 'card-frame__photo border-accepted'
							: 'card-frame__photo border-rejected'
					}
					style={{
						backgroundImage:
							'url(' + (!outcome || !photo ? CardIdDefault : photo) + ')',
					}}
					title="ID card picture"
				>
					{outcome && photo && isApproved ? null : (
						<Link to="/cam-view">
							<button
								type="submit"
								className="card-frame__btn"
								onClick={handleTakePicture}
							>
								{!outcome || !photo ? 'Take picture' : 'Retake picture'}
							</button>
						</Link>
					)}
				</div>

				{outcome && photo ? (
					<div
						className={
							'card-frame__msg ' +
							(isApproved ? 'msg-accepted' : 'msg-rejected')
						}
					>
						<p className="card-frame__msg--text">
							<i
								className={'fas ' + (isApproved ? 'fa-check' : 'fa-times')}
							></i>
							{isApproved ? 'Accepted' : 'Rejected'}
						</p>
					</div>
				) : null}
			</section>
		</>
	);
};

export default CardFrame;
