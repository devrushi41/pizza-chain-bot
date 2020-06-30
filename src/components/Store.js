import React, { PureComponent } from "react";
class Store extends PureComponent {
  getCount = (status) => {
    return this.props.details.orders.filter((n) => {
      return n.status === status;
    }).length;
  };
  render() {
    return (
      <li className="center">
        <div className=" chip">{this.props.index}</div>

        <p>Orders Confirmed: {this.getCount("Confirmed")}</p>

        <p>Orders In the Oven: {this.getCount("In The Oven")}</p>

        <p>Orders Delivered: {this.getCount("Delivered")}</p>
      </li>
    );
  }
}

export default Store;
