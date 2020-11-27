let inMemoryCache = ApolloInMemoryCache.createInMemoryCache();
let httpLink = ApolloLinks.createHttpLink(~uri="http://0.0.0.0:4000/api", ());
let instance = ReasonApollo.createApolloClient(~link=httpLink, ~cache=inMemoryCache, ());

type route =
  | Home
  | Login
  | Register
  | NotFound;

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  <ReasonApollo.Provider client=instance>
    <ApolloHooks.Provider client=instance>
      {switch (url.path) {
       | [] => <Home />
       | ["login"] => <Login />
       | ["register"] => <Register />
       | _ => <NotFound />
       }}
    </ApolloHooks.Provider>
  </ReasonApollo.Provider>;
};
