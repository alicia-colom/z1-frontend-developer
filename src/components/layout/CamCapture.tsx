import React from 'react';
import '../../stylesheets/layout/CamCapture.scss';

const CamCapture = () => {
	const a: string = 'a';

	return (
		<section className="cam-capture">
			<div
				className={
					'cam-capture__image ' +
					(a === 'a' ? 'border-taken' : 'border-warning')
				}
			></div>
			<div className="cam-capture__msg">
				<p className="cam-capture__msg--text">
					<i
						className={
							'cam-capture__msg--icon far ' +
							(a === 'a' ? 'fa-check-circle' : 'fa-lightbulb')
						}
					></i>
					{a === 'a' ? 'Picture taken!' : 'Room lighting is too low'}
				</p>
			</div>
		</section>
	);
};

// TODO: Hay que meter un tiempo de retardo antes de saltar a MainView,
// TODO: tanto si el servidor responde "Approved" o el mensaje de error.

export default CamCapture;
