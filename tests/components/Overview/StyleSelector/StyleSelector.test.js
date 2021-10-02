import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

// import Overview from '../../../client/src/components/Overview/Overview.jsx';
// import ProductInfo from '../../../client/src/components/Overview/Product-Info/ProductInfo.jsx';
// import ImageGallery from '../../../../client/src/components/Overview/Image-Gallery/ImageGallery.jsx';
import StyleSelector from '../../../../client/src/components/Overview/Style-Selector/StyleSelector.jsx';


describe('StyleSelector Testing', () => {
  test('renders price, thumbnails and cart components onto page', () => {
    let wrapper = shallow(<StyleSelector />, { disableLifecycleMethods: true });
    expect(wrapper.find('Price').exists()).toBe(true);
    expect(wrapper.find('Thumbnails').exists()).toBe(true);
    expect(wrapper.find('Cart').exists()).toBe(true);


    // console.log(__dirname);
  })

});