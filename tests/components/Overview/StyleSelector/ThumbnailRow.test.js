import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

// import Overview from '../../../client/src/components/Overview/Overview.jsx';
// import ProductInfo from '../../../client/src/components/Overview/Product-Info/ProductInfo.jsx';
// import ImageGallery from '../../../../client/src/components/Overview/Image-Gallery/ImageGallery.jsx';
import ThumbnailRow from '../../../../client/src/components/Overview/Style-Selector/ThumbnailRow.jsx';
import fixtures from '../fixtures.js';


describe('ThumbnailRow Testing', () => {
  test('renders a div that has the className row', () => {
    let wrapper = shallow(<ThumbnailRow row={fixtures.row} />, { disableLifecycleMethods: true });
    expect(wrapper.find('.row').exists()).toBe(true);
    // console.log(__dirname);
  })

});