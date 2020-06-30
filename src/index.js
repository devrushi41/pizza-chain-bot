import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { browserHistory, Route, Router, Link } from "react-router";
import ConversationPane from "./components/ConversationPane";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/conversation/:human" component={ConversationPane}></Route>
    </Route>
  </Router>,
  document.getElementById("root")
);
