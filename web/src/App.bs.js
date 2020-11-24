'use strict';

var React = require("react");
var Login$Web = require("./Login/Login.bs.js");
var NotFound$Web = require("./Login/NotFound.bs.js");
var Register$Web = require("./Login/Register.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (match) {
    switch (match.hd) {
      case "login" :
          if (!match.tl) {
            return React.createElement(Login$Web.make, {});
          }
          break;
      case "register" :
          if (!match.tl) {
            return React.createElement(Register$Web.make, {});
          }
          break;
      default:
        
    }
  }
  return React.createElement(NotFound$Web.make, {});
}

var make = App;

exports.make = make;
/* react Not a pure module */
