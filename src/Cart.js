import React, { Component } from 'react';
import PumpkinData from './pumpkinData';

class Cart extends Component {
    var pumpkin = {
      name: "Knuckle Head",
      description: "Freaky, orange, and warted. Spectacular warting makes them the star of the show. Moderate vines bear fruit averaging 12-16 lb. and 12'' h x 10'' w. ",
      url: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw9caaaed3/images/products/vegetables/00091_01_knuckle_head.jpg?sw=774&cx=322&cy=38&cw=1146&ch=1146"
    }
  render() {
    return (
      <div>
        <h1>This is the shopping cart</h1>
        <div className="cart">
        <div>
          <ul>
            <li>{pumpkin.name}</li>
            <li>{pumpkin.description}</li>
            <li>{pumpkin.url}<li>
            <li>"Price: $24.95"</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Cart;
