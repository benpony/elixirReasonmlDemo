[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  let pathList = List.map(path => <div> {React.string(path)} </div>, url.path);
  let pathArr = Array.of_list(pathList);

  <div> {"Page Not Found" |> ReasonReact.string} {ReasonReact.array(pathArr)} </div>;
};
