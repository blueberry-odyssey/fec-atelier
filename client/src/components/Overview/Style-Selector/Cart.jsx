import React from 'react';

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: {},
      skus: {},
      quantityAvailable: 1,
      quantityArray: [],
      sizeSelected: 'Select Size',
      quantitySelected: 1,
      disabled: true
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.manipulateData = this.manipulateData.bind(this);
    this.createQuantityArray = this.createQuantityArray.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      selectedStyle: props.selectedStyle,
      skus: state.selectedStyle.skus
    };
    // Return null to indicate no change to state.
    return null;
  }


  handleSizeChange(event) {
    // console.log(event);
    let context = this;
    //at every change, set sizeSelected, and default quantitySelected to 1
    this.setState({ sizeSelected: event.target.value, quantitySelected: 1 });

    //if Select Size is chosen, disable quantity dropdown
    if (event.target.value === 'Select Size') {
      this.setState({ disabled: true });
    }

    //if size is valid, update quantityAvailable and quantityArray and enable quantity dropdown
    this.manipulateData(this.state.skus).forEach(function ({ size, quantity }) {
      if (size === event.target.value) {
        context.setState({ quantityAvailable: quantity });

        let quantityArray;

        if (quantity >= 15) {
          quantityArray = context.createQuantityArray(15);
        } else {
          quantityArray = context.createQuantityArray(quantity);
        }

        context.setState({ quantityArray: quantityArray, disabled: false });
      }
    });
  }

  handleQuantityChange(event) {
    this.setState({ quantitySelected: event.target.value });
  }

  manipulateData(object) {
    // console.log(object);
    let array = [];
    for (let key in object) {
      array.push(object[key]);
    }
    return array;
  }

  createQuantityArray(quantity) {
    return [...Array(quantity + 1).keys()].slice(1);
  }

  render() {
    let result = this.manipulateData(this.state.skus);

    return (
      <div>
        <div className='dropdowns'>
          <select className='dropdown' value={this.state.sizeSelected} onChange={this.handleSizeChange}>
            <option>Select Size</option>
            {result.map(function ({ size, quantity }, key) {
              return (quantity > 0 && <option key={key}>{size}</option>)
            })}
          </select>

          <select
            className='dropdown'
            value={this.state.sizeSelected === 'Select Size' ? '-' : this.state.quantitySelected}
            disabled={this.state.disabled}
            onChange={this.handleQuantityChange}>
            <option disabled>-</option>
            {this.state.quantityArray.map(function (num) {
              return <option key={num}>{num}</option>
            })}
          </select>

        </div>
        <div className='cart-buttons'>
          <button className='cart-button'>Add To Cart</button>
          <button className='cart-button'>Add to Favorites</button>
        </div>

      </div>
    )

  }
}

export default Cart;