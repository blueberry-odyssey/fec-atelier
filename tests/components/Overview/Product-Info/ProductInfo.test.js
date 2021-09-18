import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

import ProductInfo from '../../../../client/src/components/Overview/Product-Info/ProductInfo.jsx';

import fixtures from '../fixtures.js';

describe('ProductInfo Testing', () => {
  test('renders star rating, item details, and price components', () => {
    let wrapper = shallow(<ProductInfo productData={fixtures} />);
    expect(wrapper.find('StarRating').exists()).toBe(true);
    expect(wrapper.find('ItemDetails').exists()).toBe(true);
    expect(wrapper.find('Price').exists()).toBe(true);
  })
})