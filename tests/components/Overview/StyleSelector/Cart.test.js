import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

// import Overview from '../../../client/src/components/Overview/Overview.jsx';
// import ProductInfo from '../../../client/src/components/Overview/Product-Info/ProductInfo.jsx';
// import ImageGallery from '../../../../client/src/components/Overview/Image-Gallery/ImageGallery.jsx';
import Cart from '../../../../client/src/components/Overview/Style-Selector/Cart.jsx';
import fixtures from '../fixtures.js';


describe('Cart Testing', () => {
  test('renders the dropdowns and buttons for cart', () => {
    let wrapper = shallow(<Cart selectedStyle={fixtures.selectedStyle} />, { disableLifecycleMethods: true });
    expect(wrapper.find('.dropdowns').exists()).toBe(true);
    expect(wrapper.find('.dropdown').exists()).toBe(true);
    expect(wrapper.find('.cart-buttons').exists()).toBe(true);
    expect(wrapper.find('.cart-button').exists()).toBe(true);
    // console.log(__dirname);
  })

});
