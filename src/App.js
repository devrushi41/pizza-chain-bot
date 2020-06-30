import React, { Component } from "react";
import InboxPane from "./components/InboxPane";
import * as sample from "./SampleData";
import ConversationPane from "./components/ConversationPane";
import StorePane from "./components/StorePane";

// import "./App.css";

class App extends Component {
  state = {
    humans: {},
    stores: {},
    selectedConversation: [],
  };
  loadSampleData = () => {
    this.setState(sample);
  };

  // user naviagtes to /conversation/
  componentWillMount() {
    if ("human" in this.props.params) {
      this.loadSampleData();
    }
  }

  render() {
    return (
      <div>
        <div id="header">
          <button className="btn center" onClick={() => this.loadSampleData()}>
            Sample Data
          </button>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col s12 m4 grey lighten-5">
              <InboxPane humans={this.state.humans} />
            </div>
            <div className="col s12 m4">
              {this.props.children || "Select a conversation from the inbox"}
            </div>

            <div className="col s12 m4 grey lighten-5">
              <StorePane stores={this.state.stores} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
