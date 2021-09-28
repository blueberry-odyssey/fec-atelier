import React from 'react';
import Enzyme from 'enzyme';
import { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

// import App from '../../../client/src/index.jsx';
import RelatedProducts from '../../../client/src/components/Related/Related-Products/Related-Products.jsx';
import Carousel from '../../../client/src/components/Related/Carousel/Carousel.jsx';
import OutfitCarousel from '../../../client/src/components/Related/Outfit-Carousel/Outfit-Carousel.jsx';
import RelatedCarousel from '../../../client/src/components/Related/Related-Carousel/Related-Carousel.jsx';
import ModalPopup from '../../../client/src/components/Related/Modal-Popup/Modal-Popup.jsx';
// import HTML from '../../../client/dist/index.html';
// const { document } = (new JSDOM(HTML)).window;
// const appWrapper = shallow(<App/>)

const relatedWrapper = shallow(<RelatedProducts/>);
describe('Related Products', () => {
  // console.log('my debugger:', relatedWrapper.debug());
  it('finds carousel on Related Product widget', () => {
    expect(relatedWrapper.contains([<Carousel/>])).toEqual(true);
  })

  it('Related Product appears on App', () => {
    expect(relatedWrapper.find('h1').first().text()).toContain('Related Products');
  })
})

const carouselWrapper = shallow(<Carousel/>);
describe('Carousel', () => {
  it('has all necessary props passed', () => {
    // console.log('my debugger:', carouselWrapper);
    // expect(carouselWrapper.props())
  })
  it('contains Outfit carousel', () => {
    expect(carouselWrapper.contains([<OutfitCarousel/>])).toEqual(true);
  })
  it('receives button clicks', () => {
    expect(carouselWrapper.state('translate')).toEqual(0);
    expect(carouselWrapper.find('#right-button').simulate('click'));
    expect(carouselWrapper.state('translate')).toEqual(-500);
  })
})

// const modalWrapper = shallow(<ModalPopup show={true}/>);
// describe('Modal Popup', () => {
//   it('has comparing window', () => {
//     console.log(modalWrapper.debug());
//     expect(modalWrapper.find('.modal-window').text()).toEqual('Comparing');
//   })
// })
// describe('A single related product gets all necessary props', () => {
//   test('currentProduct, inOutfit, display, showModal, product,\
//   styleData, updateOverviewProduct, overviewCharacteristics, removeOutfit', () => {
//   }
//   )
// })


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