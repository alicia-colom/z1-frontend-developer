import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './layout/Home';
import CamView from './layout/CamView';
import '../stylesheets/App.scss';

function App() {
	// TODO: Borrar cuando captura de foto OK
	const cardFake: string =
		'https://www.ocu.org/-/media/ocu/images/home/dinero/tarjetas/tarjeta_aqua_1600x900.jpg?rev=9dccc2d8-2b35-4405-bcf8-f019e635d302&mw=660&hash=46412196F3F1289D8F64934517C15C14';

	// INITIAL VALUES
	const initialPhoto: string = '../../images/ID_bg.svg';
	const initialOutcome: string = '';

	// STATES
	const [photo, setPhoto] = useState<string>(cardFake);
	const [outcome, setOutcome] = useState<string>(initialOutcome);
	const [isApproved, setIsApproved] = useState<boolean>(false);

	// SET STATES
	const handleOutcomeValue = (result: any) => {
		const newValue: string = result;
		setOutcome(newValue);
	};
	const handleIsApprovedValue = (result: any) => {
		const newValue: boolean = result === 'Approved';
		setIsApproved(newValue);
	};
	// TODO: función manejadora para setear el state PHOTO
	const handlePhotoValue = (newCapture: string) => {
		setPhoto(newCapture);
	};

	return (
		<Switch>
			<Route exact path="/">
				<Home photo={photo} outcome={outcome} isApproved={isApproved} />
			</Route>
			<Route exact path="/cam-view">
				<CamView
					photo={photo}
					outcome={outcome}
					isApproved={isApproved}
					handleOutcomeValue={handleOutcomeValue}
					handleIsApprovedValue={handleIsApprovedValue}
					handlePhotoValue={handlePhotoValue}
				/>
			</Route>
		</Switch>
	);
}

export default App;
