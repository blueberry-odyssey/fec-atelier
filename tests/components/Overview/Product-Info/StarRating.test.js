import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

import StarRating from '../../../../client/src/components/Overview/Product-Info/StarRating.jsx';

import fixtures from '../fixtures.js';

describe('StarRating Testing', () => {
  test('renders Read Reviews link onto page', () => {
    let wrapper = shallow(<StarRating />);
    expect(wrapper.find('.overview-rating-link').exists()).toBe(true);
  })
})