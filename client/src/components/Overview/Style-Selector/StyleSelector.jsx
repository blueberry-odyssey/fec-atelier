import React from 'react';
import axios from 'axios';
import Thumbnails from './Thumbnails.jsx';
import Price from './Price.jsx';
import Cart from './Cart.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    // const selectedStyle = this.props.styles[0];
    this.state = {
      styles: [],
      selectedStyle: {},
      defaultStyle: {}
    };

    this.getStyles = this.getStyles.bind(this);
    this.setSelectedStyle = this.setSelectedStyle.bind(this);
  }

  componentDidMount() {
    this.getStyles(this.props['product_id']);
  }

  componentDidUpdate(prevProps) {
    if (prevProps['product_id'] !== this.props['product_id']) {
      this.getStyles(this.props['product_id']);
    }
  }

  getStyles(productId = '47421') {
    let context = this;
    axios({
      method: 'get',
      url: '/products/getStyles',
      params: { product_id: productId }
    })
      .then(function (styles) {
        //console.log('styles array: ', styles);
        context.setState({ styles: styles.data });
        context.setState({ selectedStyle: styles.data[0] });
        context.setState({ defaultStyle: styles.data[0] });
        context.props.setDefaultPhotos(styles.data[0].photos);
        context.props.setSelectedPhotos([]);
      })
      .catch(function (err) {
        console.log('err in getStyles overview.jsx: ', err);
      })
  }

  setSelectedStyle(styleItem) {
    this.setState({ selectedStyle: styleItem });
  }


  render() {
    // console.log(this.props.styles[0].name);
    // console.log('STATE: ', this.state.selectedStyle);
    //console.log('PROPS: ', this.props);
    let originalPrice = this.state.selectedStyle.original_price || 0;
    return (
      <div>
        <Price original={originalPrice} sale={this.state.selectedStyle['sale_price']} />
        <p><b>STYLE /</b>{this.state.selectedStyle.name}</p>
        <Thumbnails
          styles={this.state.styles}
          setSelectedStyle={this.setSelectedStyle}
          setSelectedPhotos={this.props.setSelectedPhotos}
          selectedStyle={this.state.selectedStyle} />

        <Cart selectedStyle={this.state.selectedStyle} />
      </div>
    )
  }

}

export default StyleSelector;