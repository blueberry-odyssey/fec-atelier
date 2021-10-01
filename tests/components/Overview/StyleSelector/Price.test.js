import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

// import Overview from '../../../client/src/components/Overview/Overview.jsx';
// import ProductInfo from '../../../client/src/components/Overview/Product-Info/ProductInfo.jsx';
// import ImageGallery from '../../../../client/src/components/Overview/Image-Gallery/ImageGallery.jsx';
import Price from '../../../../client/src/components/Overview/Style-Selector/Price.jsx';
import fixtures from '../fixtures.js';


describe('Price Testing', () => {
  test('renders a sale price when there is a sale', () => {
    let wrapper = shallow(<Price sale={fixtures.sale} />, { disableLifecycleMethods: true });
    expect(wrapper.find('.sale-price').exists()).toBe(true);
    // console.log(__dirname);
  })

});