import React from 'react';

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: {},
      skus: {},
      quantityAvailable: 1,
      quantityArray: [],
      sizeSelected: ''
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.manipulateData = this.manipulateData.bind(this);
    this.createQuantityArray = this.createQuantityArray.bind(this);
    // this.handleQuantityChange = this.handleQuantityChange.bind(this);
    // this.findAvailableQuantity = this.findAvailableQuantity.bind(this);
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
    console.log(event);
    let context = this;
    this.setState({ sizeSelected: event.target.value });

    this.manipulateData(this.state.skus).forEach(function ({ size, quantity }) {
      if (size === event.target.value) {
        context.setState({ quantityAvailable: quantity });

        let quantityArray;

        if (quantity >= 15) {
          quantityArray = context.createQuantityArray(15);
        } else {
          quantityArray = context.createQuantityArray(quantity);
        }

        context.setState({ quantityArray: quantityArray });
      }
    });
  }

  manipulateData(object) {
    console.log(object);
    let array = [];
    for (let key in object) {
      array.push(object[key]);
    }
    return array;
  }

  createQuantityArray(quantity) {
    return [...Array(quantity + 1).keys()].slice(1);
  }

  // componentDidMount() {
  //   this.setState({ skus: this.manipulateData(this.state.skus) })
  // }
  // handleQuantityChange(event) {
  //   this.setState({ quantitySelected: event.target.value });
  // }

  // findAvailableQuantity(size) {
  //   console.log('INVOKED!');
  //   let context = this;
  //   let itemArray = this.props.skus && Object.values(this.props.skus);
  //   itemArray.forEach(function (item) {
  //     if (item.size === size) {
  //       context.setState({ quantityAvailable: item.quantity });
  //     }
  //   })
  // }

  render() {
    // console.log(this.state.skus && Object.values(this.state.skus));
    let result = this.manipulateData(this.state.skus);
    // console.log('result: ', this.result);
    console.log(this.createQuantityArray(4));

    return (
      <div>
        <h2>Cart: </h2>
        <div>
          <select onChange={this.handleSizeChange}>
            <option>Select Size</option>
            {result.map(function ({ size, quantity }) {
              return (quantity > 0 && <option key={size}>{size}</option>)
            })}
          </select>

          <select>
            <option>-</option>
            <option>1</option>
            {/* {this.props.skus && Object.values(this.props.skus).forEach(function (item) {
              if (item.size === this.state.selectedStyle) {
                available = item.quantity;
              }
            })} */}
          </select>

        </div>
        <div>
          <button>Add To Cart</button>
          <button>Add to Favorites</button>
        </div>

      </div>
    )

  }
}

export default Cart;