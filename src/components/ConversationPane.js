import React, { Component } from "react";
import Message from "./Message";
import * as sample from "../SampleData";
class ConversationPane extends Component {
  loadConversationData = (human) => {
    this.setState({ conversations: sample.humans[human].conversations });
  };

  renderMessage = (message) => {
    return (
      <Message
        who={message.who}
        text={message.text}
        key={new Date(message.time).getTime()}
      />
    );
  };
  // handle when user navigates from / to /conversation/human
  componentWillMount() {
    this.loadConversationData(this.props.params.human);
  }
  // handle when the user navigates from one conversation to another
  componentWillReceiveProps(nextProps) {
    this.loadConversationData(nextProps.params.human);
  }
  render() {
    return (
      <div id="conversation-pane">
        <h3>Conversation Pane</h3>
        <h4>{this.props.params.human}</h4>
        <div id="messages">
          {this.state.conversations.map(this.renderMessage)}
        </div>
      </div>
    );
  }
}

export default ConversationPane;
