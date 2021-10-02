import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

// import Overview from '../../../client/src/components/Overview/Overview.jsx';
// import ProductInfo from '../../../client/src/components/Overview/Product-Info/ProductInfo.jsx';
import ImageGallery from '../../../../client/src/components/Overview/Image-Gallery/ImageGallery.jsx';

describe('ImageGallery Testing', () => {
  test('renders a div with className image onto page', () => {
    let wrapper = shallow(<ImageGallery />, { disableLifecycleMethods: true });
    expect(wrapper.find('.image').exists()).toBe(true);
    // console.log(__dirname);
  })

});