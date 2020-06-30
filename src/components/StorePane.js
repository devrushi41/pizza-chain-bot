import React, { PureComponent } from "react";
import Store from "./Store";
class StorePane extends PureComponent {
  state = {};
  renderStore = (store) => {
    return (
      <Store key={store} index={store} details={this.props.stores[store]} />
    );
  };
  render() {
    return (
      <div id="stores-pane">
        <h1>Stores & Ovens</h1>
        <ul>{Object.keys(this.props.stores).map(this.renderStore)}</ul>
      </div>
    );
  }
}

export default StorePane;
