import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
        {/* If the list is blog, we render a title. */}
        {data.isArchive && (
        <Header>
          <p><span>Blog</span></p>
          <h1>Astuces et Actualités sur le marketing digital</h1>
          <p>Retrouvez mes dernières réflexions et recherches sur les sujets d'acquisition, outils digitaux et développement web.</p>

        </Header>
      )}
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      <Publications>
              {/* Iterate over the items of the list. */}
              {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Item key={item.id} item={item} />;
              })}
              <Pagination />
      </Publications>

    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  padding: 150px 20% 30px 20%;
  margin: 0;
  padding: 24px;
  list-style: none;
  @media screen and (max-width: 1920px) {
    padding: 80px 12%;
  }
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    font-size: 4.430em;
    margin: 0px auto;
    max-width: 800px;
  }
  p {
    font-size: 1.340em;
    margin: 40px auto;
    max-width: 800px;
  }
  span {
    font-size: 1em;
    font-weight: 700;
  }
`;

const Publications = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    margin: 150px 0px;
    & article:first-child {
      flex: 1 1 66.66%;
      display: flex;
      gap: 50px;
      & :nth-child(2) {
        flex: 1 1 40%;
      }
    }
    img {
      max-height: 500px!important;
    }
`