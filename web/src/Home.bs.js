// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Js_option from "bs-platform/lib/es6/js_option.js";
import * as ApolloHooks from "reason-apollo-hooks/src/ApolloHooks.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var ppx_printed_query = "query   {\nblogPosts  {\nid  \ntitle  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var value$2 = Js_dict.get(value$1, "blogPosts");
  return {
          blogPosts: value$2 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(value$2))).map(function (value) {
                  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
                  var value$2 = Js_dict.get(value$1, "id");
                  var tmp;
                  if (value$2 !== undefined) {
                    var value$3 = Caml_option.valFromOption(value$2);
                    var value$4 = Js_json.decodeString(value$3);
                    tmp = value$4 !== undefined ? value$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                  } else {
                    tmp = Js_exn.raiseError("graphql_ppx: Field id on type BlogPost is missing");
                  }
                  var value$5 = Js_dict.get(value$1, "title");
                  var tmp$1;
                  if (value$5 !== undefined) {
                    var value$6 = Caml_option.valFromOption(value$5);
                    var value$7 = Js_json.decodeString(value$6);
                    tmp$1 = value$7 !== undefined ? value$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
                  } else {
                    tmp$1 = Js_exn.raiseError("graphql_ppx: Field title on type BlogPost is missing");
                  }
                  return {
                          id: tmp,
                          title: tmp$1
                        };
                }) : Js_exn.raiseError("graphql_ppx: Field blogPosts on type RootQueryType is missing")
        };
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeVariables(param) {
  return null;
}

function definition_2(graphql_ppx_use_json_variables_fn) {
  return 0;
}

var definition = [
  parse,
  ppx_printed_query,
  definition_2
];

function ret_type(f) {
  return {};
}

var MT_Ret = {};

var GetBlogPosts = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

function Home(Props) {
  React.useState(function () {
        return [];
      });
  var match = ApolloHooks.useQuery(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, definition);
  var posts = match[0];
  React.useEffect((function () {
          if (typeof posts === "number") {
            if (posts === /* Loading */0) {
              console.log("LOADING");
              return ;
            }
            console.log("NO DATA?");
            return ;
          } else {
            if (posts.TAG) {
              console.log("ERROR");
              return ;
            }
            console.log(posts._0);
            return ;
          }
        }), [posts]);
  return React.createElement("div", undefined, "hello  home");
}

var make$1 = Home;

export {
  GetBlogPosts ,
  make$1 as make,
  
}
/* react Not a pure module */
