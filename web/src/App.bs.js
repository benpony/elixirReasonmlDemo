// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Login$Blogdemo from "./Login/Login.bs.js";
import * as NotFound$Blogdemo from "./Login/NotFound.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.bs.js";
import * as Register$Blogdemo from "./Login/Register.bs.js";

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (match) {
    switch (match.hd) {
      case "login" :
          if (!match.tl) {
            return React.createElement(Login$Blogdemo.make, {});
          }
          break;
      case "register" :
          if (!match.tl) {
            return React.createElement(Register$Blogdemo.make, {});
          }
          break;
      default:
        
    }
  }
  return React.createElement(NotFound$Blogdemo.make, {});
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
