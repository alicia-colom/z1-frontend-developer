import React from 'react';
import { Link } from 'react-router-dom';
import CamCapture from './layout/CamCapture';
import '../stylesheets/layout/CamView.scss';

const CamView = () => {
	return (
		<div className="cam-view">
			<section className="cam-view__info">
				<h2 className="cam-view__info--title">Take picture</h2>
				<p className="cam-view__info--text">
					Fit your ID card inside the frame.
					<br />
					The picture will be taken automatically.
				</p>
				<CamCapture />
			</section>

			<Link to="/">
				<a href="/" title="Back to home" className="cam-view__link">
					Cancel
				</a>
			</Link>
		</div>
	);
};

export default CamView;
