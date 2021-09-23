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
      selectedStyle: {}
    };

    // this.setDefaultStyle = this.setDefaultStyle.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.setSelectedStyle = this.setSelectedStyle.bind(this);
  }

  componentDidMount() {
    this.getStyles(this.props['product_id']);
  }

  getStyles(productId) {
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
      })
      .catch(function (err) {
        console.log('err in getStyles overview.jsx: ', err);
      })
  }

  setSelectedStyle(styleItem) {
    this.setState({ selectedStyle: styleItem });
  }
  // componentDidUpdate() {
  //   this.setDefaultStyle();
  // }

  // setDefaultStyle() {
  //   console.log('setDefaultStyle invoked!');
  //   // let firstStyle = this.props.styles[0];
  //   this.setState({ selectedStyle: this.props.styles });
  // }


  render() {
    // console.log(this.props.styles[0].name);
    //console.log('STATE: ', this.state);
    //console.log('PROPS: ', this.props);
    return (
      <div>
        <Price original={this.state.selectedStyle['original_price']} sale={this.state.selectedStyle['sale_price']} />
        <p><b>STYLE /</b>{this.state.selectedStyle.name}</p>
        <Thumbnails styles={this.state.styles} setSelectedStyle={this.setSelectedStyle} />
        <Cart selectedStyle={this.state.selectedStyle} />
      </div>
    )
  }

}

export default StyleSelector;