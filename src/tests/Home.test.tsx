import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Home from '../components/layout/Home';

configure({ adapter: new Adapter() });
describe('Home component test', () => {
	it('Render static elements', () => {
		const wrapper = shallow(
			<Home photo={''} outcome={''} isApproved={false} />
		);

		expect(wrapper.find('section').length).toBe(1);

		const titleElement = wrapper.find('h2');
		expect(titleElement.hasClass('main-view__info--title')).toBe(true);
		expect(titleElement.text()).toBe('Scan your ID');

		const paragraphElement = wrapper.find('p');
		expect(paragraphElement.hasClass('main-view__info--text')).toBe(true);
		expect(paragraphElement.text()).toBe(
			'Take a picture. It may take time to validate your personal information.'
		);
	});
});
