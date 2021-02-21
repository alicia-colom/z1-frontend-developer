import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CamView from '../components/layout/CamView';
import Webcam from 'react-webcam';

configure({ adapter: new Adapter() });
describe('CamView component tests', () => {
	// * NOTE: Should be added modification over use of useEffect mock*
	// let useEffect = jest.spyOn(React, 'useEffect');
	// const mockUseEffect = () => {
	// 	useEffect.mockImplementationOnce((f) => f());
	// };

	it('Should re-render Webcam when photo is rejected', () => {
		const wrapper = shallow(
			<CamView
				photo={'photoMock'}
				outcome={'Not accepted'}
				isApproved={false}
				handleOutcomeValue={() => undefined}
				handleIsApprovedValue={() => undefined}
				handlePhotoValue={() => undefined}
			/>
		);
		// mockUseEffect();

		expect(wrapper.find(Webcam).hasClass('border-rejected')).toBe(true);
	});

	it('Should not re-render Webcam when photo is accepted', () => {
		const wrapper = shallow(
			<CamView
				photo={'photoMock'}
				outcome={'Accepted'}
				isApproved={true}
				handleOutcomeValue={() => undefined}
				handleIsApprovedValue={() => undefined}
				handlePhotoValue={() => undefined}
			/>
		);

		expect(wrapper.find(Webcam).length).toBe(0);
	});
});
