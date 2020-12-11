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
  let (posts, _) = useQuery(GetBlogPosts.definition);

  let (blogPosts, setBlogPosts) = React.useState(() => [||]);

  React.useEffect1(
    () => {
      switch (posts) {
      | Loading => Js.log("LOADING")
      | Data(data) =>
        // [%debugger];
        let posts = data##blogPosts
        setBlogPosts(_ => posts);
        Js.log(posts);
      | NoData => Js.log("NO DATA?")
      | Error(_) => Js.log("ERROR")
      };

      None;
    },
    [|posts|],
  );

  <>
    <div> ("hello  home" |> React.string) </div>
    <div>
        (
            (blogPosts |> Array.map((post) => <div> (post##title |> React.string) </div> )) |> React.array
        )
    </div>
  </>;
};
