open ApolloHooks;

module GetBlogPosts = [%graphql {|
  query {
    blogPosts {
      id
      title
    }
  }
  |}];

[@react.component]
let make = () => {
  let (blogPosts, setBlogPosts) = React.useState(_ => [||]);

  let (posts, _) = useQuery(GetBlogPosts.definition);

  React.useEffect1(
    () => {
      switch (posts) {
      | Loading =>
        Js.log("LOADING");
        None;
      | Data(data) =>
        Js.log(data);
        None; // setBlogPosts(data)
      | NoData =>
        Js.log("NO DATA?");
        None;
      | Error(_) =>
        Js.log("ERROR");
        None;
      }
    },
    [|posts|],
  );

  // %debugger
  <div> {"hello  home" |> React.string} </div>;
};
