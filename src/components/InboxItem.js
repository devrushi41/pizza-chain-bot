import React, { PureComponent } from "react";
import { Link } from "react-router";

class InboxItem extends PureComponent {
  sortByDate = (a, b) => {
    return a.time < b.time ? -1 : a.time > b.time ? 1 : 0;
  };
  messageSummary = (conversations) => {
    const lastMessage = conversations.sort(this.sortByDate)[0];
    return (
      lastMessage.who +
      ' said: "' +
      lastMessage.text +
      '" @' +
      lastMessage.time.toString()
    );
  };

  render() {
    return (
      <tr>
        <td>
          <Link to={"/conversation/" + encodeURIComponent(this.props.index)}>
            {this.messageSummary(this.props.details.conversations)}
          </Link>
        </td>
        <td>{this.props.index}</td>
        <td>{this.props.details.orders.sort(this.sortByDate)[0].status} </td>
      </tr>
    );
  }
}

export default InboxItem;
