import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div>
        <div
          className={
            this.props.who === "bot"
              ? "chip white-text blue right"
              : "chip white-text teal left"
          }
        >
          {this.props.who} said :"{this.props.text}"
        </div>
      </div>
    );
  }
}

export default Message;
