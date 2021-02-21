import React from 'react';
import { Link } from 'react-router-dom';
import CardIdDefault from '../../images/ID_bg.svg';
import '../../stylesheets/layout/CardFrame.scss';

const CardFrame = (props: StateDataProps) => {
	return (
		<>
			<section className="card-frame">
				<div
					className={
						!props.outcome || !props.photo
							? 'card-frame__photo'
							: props.isApproved
							? 'card-frame__photo border-accepted'
							: 'card-frame__photo border-rejected'
					}
					style={{
						backgroundImage:
							'url(' +
							(!props.outcome || !props.photo ? CardIdDefault : props.photo) +
							')',
					}}
					title="ID card picture"
				>
					{props.outcome && props.photo && props.isApproved ? null : (
						// TODO: Este link tiene que lanzar SIEMPRE a la CamView con la bombilla
						// TODO: pero no lo hace en todos los casos...¿? Revisar

						<Link to="/cam-view" className="card-frame__btn">
							{!props.outcome || !props.photo
								? 'Take picture'
								: 'Retake picture'}
						</Link>
					)}
				</div>

				{props.outcome && props.photo ? (
					<div
						className={
							'card-frame__msg ' +
							(props.isApproved ? 'msg-accepted' : 'msg-rejected')
						}
					>
						<p className="card-frame__msg--text">
							<i
								className={
									'fas ' + (props.isApproved ? 'fa-check' : 'fa-times')
								}
							></i>
							{props.isApproved ? 'Accepted' : 'Rejected'}
						</p>
					</div>
				) : null}
			</section>
		</>
	);
};

export default CardFrame;
