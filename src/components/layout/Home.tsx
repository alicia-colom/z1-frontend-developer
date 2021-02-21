import React from 'react';
import Header from './Header';
import CardFrame from './CardFrame';
import '../../stylesheets/layout/Home.scss';

const Home = (props: HandleStateProps) => {
	return (
		<div className="main-view">
			<Header />
			<section className="main-view__info">
				<h2 className="main-view__info--title">Scan your ID</h2>
				<p className="main-view__info--text">
					Take a picture. It may take time to validate your personal
					information.
				</p>
			</section>

			<CardFrame
				photo={props.photo}
				outcome={props.outcome}
				isApproved={props.isApproved}
				handleOutcomeValue={props.handleOutcomeValue}
				handleIsApprovedValue={props.handleIsApprovedValue}
				handlePhotoValue={props.handlePhotoValue}
			/>
		</div>
	);
};

export default Home;
