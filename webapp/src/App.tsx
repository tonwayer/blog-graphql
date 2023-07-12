import { CssBaseline } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeContextProvider } from "./contexts/ColorModeContext";
import Pages from "./pages";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <CssBaseline />
        <Pages />
      </ThemeContextProvider>
    </ApolloProvider>
  );
};

export default App;
