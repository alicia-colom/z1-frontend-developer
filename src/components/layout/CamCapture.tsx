import React from 'react';
import '../../stylesheets/layout/CamCapture.scss';

const CamCapture = (props: StateDataProps) => {
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

export default CamCapture;
