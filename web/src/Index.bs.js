'use strict';

var React = require("react");
var App$Web = require("./App.bs.js");
var ReactDom = require("react-dom");
var Client$Web = require("./Client.bs.js");
var ReactApollo = require("react-apollo");
var ExampleStyles$Web = require("./ExampleStyles.bs.js");
var BlinkingGreeting$Web = require("./BlinkingGreeting/BlinkingGreeting.bs.js");
var FetchedDogPictures$Web = require("./FetchedDogPictures/FetchedDogPictures.bs.js");
var ReducerFromReactJSDocs$Web = require("./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$Web = require("./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$Web.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(ReactApollo.ApolloProvider, {
          client: Client$Web.instance,
          children: React.createElement(App$Web.make, {})
        }), makeContainer("root"));

ReactDom.render(React.createElement(BlinkingGreeting$Web.make, {
          children: "Hello!"
        }), makeContainer("Blinking Greeting"));

ReactDom.render(React.createElement(ReducerFromReactJSDocs$Web.make, {}), makeContainer("Reducer From ReactJS Docs"));

ReactDom.render(React.createElement(FetchedDogPictures$Web.make, {}), makeContainer("Fetched Dog Pictures"));

ReactDom.render(React.createElement(ReasonUsingJSUsingReason$Web.make, {}), makeContainer("Reason Using JS Using Reason"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
