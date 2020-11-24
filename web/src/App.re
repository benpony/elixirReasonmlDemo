[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  switch (url.path) {
  | ["login"] => <Login />
  | ["register"] => <Register />
  | _ => <NotFound />
  };
};

// open Router;

// type state = route;

// type action =
//   | ChangeRoute(route);

// let reducer = (state, action) =>
//   switch (action) {
//   | ChangeRoute(route) => ReasonReact.Update(route)
//   };

// let component = ReasonReact.reducerComponent(__MODULE__);

// let make = _children => {
//   ...component,
//   reducer,
//   initialState: () => mapUrlToRoute(ReasonReact.Router.dangerouslyGetInitialUrl()),
//   didMount: self => {
//     let watcherID = ReasonReact.Router.watchUrl(url => self.send(ChangeRoute(url |> mapUrlToRoute)));
//     self.onUnmount(() => ReasonReact.Router.unwatchUrl(watcherID));
//   },
//   render: self => {
//     switch (self.state) {
//     | Login => <Login />
//     | _ => <NotFound />
//     };
//   },
// };
