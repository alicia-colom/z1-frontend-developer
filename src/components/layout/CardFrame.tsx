import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/layout/CardFrame.scss';
import CardIdDefault from '../../images/ID_bg.svg';

interface Props {
	photo: string;
	outcome: string;
}

const CardFrame = (props: Props) => {
	const photoApproved: boolean = props.outcome === 'Approved';

	return (
		<>
			<section className="card-frame">
				<div
					className={
						!props.outcome || !props.photo
							? 'card-frame__photo'
							: photoApproved
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
					{props.outcome && props.photo && photoApproved ? null : (
						<Link to="/cam-view">
							<button type="submit" className="card-frame__btn">
								{!props.outcome || !props.photo
									? 'Take picture'
									: 'Retake picture'}
							</button>
						</Link>
					)}
				</div>

				{props.outcome && props.photo ? (
					<div
						className={
							'card-frame__msg ' +
							(photoApproved ? 'msg-accepted' : 'msg-rejected')
						}
					>
						<p className="card-frame__msg--text">
							<i
								className={'fas ' + (photoApproved ? 'fa-check' : 'fa-times')}
							></i>
							{photoApproved ? 'Accepted' : 'Rejected'}
						</p>
					</div>
				) : null}
			</section>
		</>
	);
};

export default CardFrame;
