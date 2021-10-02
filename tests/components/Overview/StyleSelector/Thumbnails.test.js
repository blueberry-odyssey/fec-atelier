import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

// import Overview from '../../../client/src/components/Overview/Overview.jsx';
// import ProductInfo from '../../../client/src/components/Overview/Product-Info/ProductInfo.jsx';
// import ImageGallery from '../../../../client/src/components/Overview/Image-Gallery/ImageGallery.jsx';
import Thumbnails from '../../../../client/src/components/Overview/Style-Selector/Thumbnails.jsx';
import fixtures from '../fixtures.js';


describe('Thumbnails Testing', () => {
  test('renders a div that has the className styles', () => {
    let wrapper = shallow(<Thumbnails styles={fixtures.styles} />, { disableLifecycleMethods: true });
    expect(wrapper.find('.styles').exists()).toBe(true);
    // console.log(__dirname);
  })

});