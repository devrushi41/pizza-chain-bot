import React, { Component } from "react";
import InboxItem from "./InboxItem";

class InboxPane extends Component {
  renderInboxItem = (human) => {
    return (
      <InboxItem key={human} index={human} details={this.props.humans[human]} />
    );
  };
  render() {
    return (
      <div id="inbox-pane">
        <h1>Inbox</h1>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.humans).map(this.renderInboxItem)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default InboxPane;
