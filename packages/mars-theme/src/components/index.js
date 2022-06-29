import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./templates/Home";
import Footer from "./footer";
import About from "./templates/About";
import Contact from "./templates/Contact";
import Developp from "./templates/Developpement"

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="fr" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}




      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Header />
        <Switch>
          <Home when={data.isHome} />
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <About when={data.isPostType && state.router.link=='/developpeur-front-end/'} />
          <Contact when={data.isPostType && state.router.link=='/contacter-tristan-freelance-wordpress/'} />
          <Developp when={data.isPostType && state.router.link=='/developpement-web/'} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: "Poppins";
    font-size: 16px;
    color: #343B4E;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .Spotify {
    border: 1px solid #343B4E;
    box-shadow: -4px 4px 0px #343B4E;
}
`;


const Main = styled.div`

`;
