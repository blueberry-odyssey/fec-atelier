import React from 'react';
import Enzyme from 'enzyme';
import { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

// import App from '../../../client/src/index.jsx';
import RelatedProducts from '../../../client/src/components/Related/Related-Products/Related-Products.jsx';
import RelatedProduct from '../../../client/src/components/Related/Related-Product/Related-Product.jsx';
import Carousel from '../../../client/src/components/Related/Carousel/Carousel.jsx';
import OutfitCarousel from '../../../client/src/components/Related/Outfit-Carousel/Outfit-Carousel.jsx';
import RelatedCarousel from '../../../client/src/components/Related/Related-Carousel/Related-Carousel.jsx';
import ModalPopup from '../../../client/src/components/Related/Modal-Popup/Modal-Popup.jsx';

// import { ModalProps } from './testing-data.js';
const modalProps = [{"id":47423,"campus":"hr-rpp","name":"Morning Joggers","slogan":"Make yourself a morning person","description":"Whether youre a morning person or not.  Whether youre gym bound or not.  Everyone looks good in joggers.","category":"Pants","default_price":"40.00","created_at":"2021-08-26T20:30:48.129Z","updated_at":"2021-08-26T20:30:48.129Z","features":[{"feature":"Fabric","value":"100% Cotton"},{"feature":"Cut","value":"Skinny"}]},{"Fit":{"id":159159,"value":"2.8297872340425532"},"Length":{"id":159160,"value":"2.8510638297872340"},"Comfort":{"id":159161,"value":"2.9148936170212766"},"Quality":{"id":159162,"value":"3.1063829787234043"}},{"id":47421,"campus":"hr-rpp","name":"Camo Onesie","slogan":"Blend in to your crowd","description":"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.","category":"Jackets","default_price":"140.00","created_at":"2021-08-26T20:30:48.129Z","updated_at":"2021-08-26T20:30:48.129Z","features":[{"feature":"Fabric","value":"Canvas"},{"feature":"Buttons","value":"Brass"}]}];
const relatedItems = [{"id":47422,"campus":"hr-rpp","name":"Bright Future Sunglasses","slogan":"You've got to wear shades","description":"Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.","category":"Accessories","default_price":"69.00","created_at":"2021-08-26T20:30:48.129Z","updated_at":"2021-08-26T20:30:48.129Z","features":[{"feature":"Lenses","value":"Ultrasheen"},{"feature":"UV Protection","value":null},{"feature":"Frames","value":"LightCompose"}]},{"id":47423,"campus":"hr-rpp","name":"Morning Joggers","slogan":"Make yourself a morning person","description":"Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.","category":"Pants","default_price":"40.00","created_at":"2021-08-26T20:30:48.129Z","updated_at":"2021-08-26T20:30:48.129Z","features":[{"feature":"Fabric","value":"100% Cotton"},{"feature":"Cut","value":"Skinny"}]},{"id":47428,"campus":"hr-rpp","name":"YEasy 350","slogan":"Just jumped over jumpman","description":"These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.","category":"Kicks","default_price":"450.00","created_at":"2021-08-26T20:30:48.129Z","updated_at":"2021-08-26T20:30:48.129Z","features":[{"feature":"Sole","value":"Rubber"},{"feature":"Material","value":"FullControlSkin"},{"feature":"Stitching","value":"Double Stitch"}]},{"id":47427,"campus":"hr-rpp","name":"Blues Suede Shoes","slogan":"2019 Stanley Cup Limited Edition","description":"Touch down in the land of the Delta Blues in the middle of the pouring rain","category":"Dress Shoes","default_price":"120.00","created_at":"2021-08-26T20:30:48.129Z","updated_at":"2021-08-26T20:30:48.129Z","features":[{"feature":"Sole","value":"Rubber"},{"feature":"Material","value":"FullControlSkin"},{"feature":"Stitching","value":"Double Stitch"}]}];
// console.log(modalProps[1]);
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

const carouselWrapper = shallow(<Carousel relatedItems={relatedItems}/>);
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
    expect(carouselWrapper.state('translate')).toEqual(-300);
  })
})

console.log(modalProps[1]);
const modalWrapper = shallow(<ModalPopup product={modalProps[0]} overviewCharacteristics={modalProps[1]} productData={modalProps[2]}/>);
describe('Modal Popup', () => {
  it('has comparing window', () => {
    // console.log(modalWrapper.debug());
    expect(modalWrapper.find('.modal-window').text()).toContain('Comparing');
  })
})

const relatedCarouselWrapper = shallow(<RelatedCarousel relatedItems={relatedItems} styleData={[1,2,3,4,5]}/>);
describe('Related Products', () => {
  // console.log('my debugger:', relatedWrapper.debug());
  it('finds related product on Related Products carousel', () => {
    console.log(relatedCarouselWrapper.debug())
    expect(relatedCarouselWrapper.find('.related-carousel').children()).toHaveLength(4);
  })

  it('Related Product appears on App', () => {
  })
})

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