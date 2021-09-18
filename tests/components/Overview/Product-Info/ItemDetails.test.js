import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

import ItemDetails from '../../../../client/src/components/Overview/Product-Info/ItemDetails.jsx';

import fixtures from '../fixtures.js';

describe('ItemDetails Testing', () => {
  test('renders category, name, and description props onto page', () => {
    let wrapper = shallow(<ItemDetails category={fixtures.category} name={fixtures.name} description={fixtures.description} />);
    expect(wrapper.find('.category').text()).toContain('Shoes');
    expect(wrapper.find('.product-name').text()).toContain('Nike Running Shoe');
    expect(wrapper.find('.product-description').text()).toContain('Run like the wind!');
  })
})