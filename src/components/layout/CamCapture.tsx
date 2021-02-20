import React from 'react';
import '../../stylesheets/layout/CamCapture.scss';

interface Props {
	photo: string;
	outcome: string;
	isApproved: boolean;
}

const CamCapture = (props: Props) => {
	//  1) Mostrar la vista CamCapture de "Bulb"
	//  2) Incluir aquí un time-out (unos 3seg), después...
	//  3) ...Accionar la camara 1 vez
	//  4) Guardar la foto tomada en el estado-photo
	//  5) Enviar el estado-photo por fetch

	//  6) Recoger respuesta del fetch en estado-outcome
	//  7.1) Si estado-outcome === "Approved"
	// 		--> pintar CamCapture + salir de la función
	//  7.2) Si estado-outcome !== "Approved"
	// 		--> pintar CamCapture + volver a ejecutar la función desde el punto 3)

	// const isApproved: boolean = outcome === 'Approved';

	return (
		<section className="cam-capture">
			<div
				className={
					!props.outcome || !props.photo
						? 'cam-capture__image'
						: props.isApproved
						? 'cam-capture__image border-accepted'
						: 'cam-capture__image border-rejected'
				}
			></div>

			{props.photo && props.outcome && !props.isApproved ? null : (
				<div className="cam-capture__msg">
					<p className="cam-capture__msg--text">
						<i
							className={
								'cam-capture__msg--icon far ' +
								(props.isApproved ? 'fa-check-circle' : 'fa-lightbulb')
							}
						></i>
						{props.isApproved ? 'Picture taken!' : 'Room lighting is too low'}
					</p>
				</div>
			)}
		</section>
	);
};

// TODO: Hay que meter un tiempo de retardo antes de saltar a MainView,
// TODO: tanto si el servidor responde "Approved" o el mensaje de error.

export default CamCapture;
