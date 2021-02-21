import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CardFrame from '../components/layout/CardFrame';

configure({ adapter: new Adapter() });
describe('CardFrame component tests', () => {
	it('Render when photo is accepted', () => {
		const wrapper = shallow(
			<CardFrame photo={'photoMock'} outcome={'Approved'} isApproved={true} />
		);

		expect(wrapper.find('div p').length).toBe(1);

		const messageElement = wrapper.find('div p');
		expect(messageElement.find('i').hasClass('fa-check')).toBe(true);
		expect(messageElement.text()).toBe('Accepted');
	});

	it('Render when photo is rejected', () => {
		const wrapper = shallow(
			<CardFrame
				photo={'photoMock'}
				outcome={'Not accepted'}
				isApproved={false}
			/>
		);

		expect(wrapper.find('div p').length).toBe(1);

		const messageElement = wrapper.find('div p');
		expect(messageElement.find('i').hasClass('fa-times')).toBe(true);
		expect(messageElement.text()).toBe('Rejected');
	});
});
