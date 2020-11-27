// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ApolloLinks from "reason-apollo/src/ApolloLinks.bs.js";
import * as ReasonApollo from "reason-apollo/src/ReasonApollo.bs.js";
import * as ReactApollo from "react-apollo";
import * as Home$Blogdemo from "./Home.bs.js";
import * as Login$Blogdemo from "./Login/Login.bs.js";
import * as NotFound$Blogdemo from "./Login/NotFound.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.bs.js";
import * as Register$Blogdemo from "./Login/Register.bs.js";
import * as ReactHooks from "@apollo/react-hooks";
import * as ApolloInMemoryCache from "reason-apollo/src/ApolloInMemoryCache.bs.js";

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, undefined);

var httpLink = ApolloLinks.createHttpLink("http://0.0.0.0:4000/api", undefined, undefined, undefined, undefined, undefined, undefined);

var instance = ReasonApollo.createApolloClient(httpLink, inMemoryCache, undefined, undefined, undefined, undefined, undefined);

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var tmp;
  var exit = 0;
  if (match) {
    switch (match.hd) {
      case "login" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(Login$Blogdemo.make, {});
          }
          break;
      case "register" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(Register$Blogdemo.make, {});
          }
          break;
      default:
        exit = 1;
    }
  } else {
    tmp = React.createElement(Home$Blogdemo.make, {});
  }
  if (exit === 1) {
    tmp = React.createElement(NotFound$Blogdemo.make, {});
  }
  return React.createElement(ReactApollo.ApolloProvider, {
              client: instance,
              children: React.createElement(ReactHooks.ApolloProvider, {
                    client: instance,
                    children: tmp
                  })
            });
}

var make = App;

export {
  inMemoryCache ,
  httpLink ,
  instance ,
  make ,
  
}
/* inMemoryCache Not a pure module */
