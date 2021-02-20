import React from 'react';
import Header from './layout/Header';
import CardFrame from './layout/CardFrame';
import '../stylesheets/layout/MainView.scss';

const MainView = (props: StateDataProps) => {
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
			/>
		</div>
	);
};

export default MainView;
