import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
          <Container>
            <Logo>
              <Link link="/">
                <p>TRISTAN TORNATORE</p>
              </Link>
            </Logo>
            <MobileMenu />
            <Nav />
          </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  background: url('https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp');
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 20%;
  color: #343B4E;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1920px) {
    padding: 35px 12%;
  }
`;

const Logo = styled.div`
  font-weight: 800;
  letter-spacing: 0.1em;
`