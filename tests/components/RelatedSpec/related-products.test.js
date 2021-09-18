import React from 'react';
import Related from '../../../client/src/components/Related/Related-items/Related-items.jsx';
import Enzyme from 'enzyme';
import {configure, shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('Components render on App', () => {
  test('RelatedItems appears on App', () => {
    let wrapper = shallow(<Related/>)
    expect(wrapper.find('h1').text()).toContain('Related Products');
  })
})


// describe('Overview Testing', () => {
//   test('render title of page', () => {
//     let wrapper = shallow(<Overview />, { disableLifecycleMethods: true });
//     expect(wrapper.find('h1').text()).toContain('blueberry odyssey');
//     // console.log(__dirname);
//   })

//   test('state is passed as props to ProductInfo Component', () => {
//     //set fake state on overview
//     let wrapper = shallow(<Overview />, { disableLifecycleMethods: true })

//     let childComponent = wrapper
//       .setState({
//         name: 'Boo',
//         category: 'Foo'
//       })
//       .find(ProductInfo);

//     console.log(typeof childComponent.prop('productData'));

//     expect(childComponent.prop('productData').name).toBe('Boo');
//     expect(childComponent.prop('productData').category).toBe('Foo');

//     // console.log(
//     //   wrapper
//     //     .setState({
//     //       name: 'Foo',
//     //       category: 'Foo'
//     //     })
//     //     .find(ProductInfo)
//     //     .prop('productData')
//     // )
//   })

// })