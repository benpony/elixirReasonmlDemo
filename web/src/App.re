type route =
  | Login
  | Register
  | NotFound;

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  switch (url.path) {
  | ["login"] => <Login />
  | ["register"] => <Register />
  | _ => <NotFound />
  };
};
