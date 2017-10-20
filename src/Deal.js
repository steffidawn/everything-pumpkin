import React, { Component } from 'react';
import './App.css';

class Deal extends Component {
  constructor(props) {
    super(props);

    this.state= {

    }
  }

  render() {
    return (
      <div>
        <div id="deal-container">
          <div id="deal-div">
              <img src="http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwe466fdad/images/products/vegetables/3777_01_galeuxdeysines.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196" />
          </div>
          <div id="deal-div-right">
            <h1>Limited Edition Featured Pumpkin</h1>
            <h2>Uniform and high yielding Jill-Be-Little has a flattened shape and wide, deep ribs. Orange 1/2 lb. fruits measure 3-4'' diam. x 2 1/2'' tall. Great for tabletop and window displays, especially when paired with Spark. Improved disease resistance over Munchkin, which it replaces. Strong long vine plants</h2>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Deal;
