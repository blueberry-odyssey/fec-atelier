import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';

import Overview from '../../../client/src/components/Overview/Overview.jsx';
import ProductInfo from '../../../client/src/components/Overview/Product-Info/ProductInfo.jsx';

describe('Overview Testing', () => {
  test('render title of page', () => {
    let wrapper = shallow(<Overview />, { disableLifecycleMethods: true });
    expect(wrapper.find('h1').text()).toContain('blueberry odyssey');
    // console.log(__dirname);
  })

  test('renders image gallery, product info, style selector, and cart', () => {
    let wrapper = shallow(<Overview />, { disableLifecycleMethods: true })
    expect(wrapper.find('ImageGallery').exists()).toBe(true);
    expect(wrapper.find('ProductInfo').exists()).toBe(true);
    expect(wrapper.find('StyleSelector').exists()).toBe(true);
    // expect(wrapper.find('Cart').exists()).toBe(true);
  })

  test('state is passed as props to ProductInfo Component', () => {
    //set fake state on overview
    let wrapper = shallow(<Overview />, { disableLifecycleMethods: true })

    let childComponent = wrapper
      .setState({
        productData: {
          name: 'Boo',
          category: 'Foo'
        }
      })
      .find(ProductInfo);

    console.log(typeof childComponent.prop('productData'));

    expect(childComponent.prop('productData').name).toBe('Boo');
    expect(childComponent.prop('productData').category).toBe('Foo');
  })
})

//you can pass in props
//how to get things into a fake state