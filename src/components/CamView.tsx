import React from 'react';
import { Link } from 'react-router-dom';
import CamCapture from './layout/CamCapture';
import '../stylesheets/layout/CamView.scss';

interface Props {
	photo: string;
	outcome: string;
	isApproved: boolean;
}

const CamView = (props: Props) => {
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

			<Link to="/">
				<a href="/" title="Back to home" className="cam-view__link">
					Cancel
				</a>
			</Link>
			{/* TODO: CANCEL debe parar el fetch (a parte de enlazar con la home)  */}
		</div>
	);
};

export default CamView;
