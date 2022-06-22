import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import dayjs from "dayjs";
import 'dayjs/locale/fr';
import Categories from '../templates/sections/Categories';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const formatDate = dayjs(date).locale('fr').format("DD MMMM YYYY");

  return (
    <Article>
      <ImgArticle>
              {/*
              * If the want to show featured media in the
              * list of featured posts, we render the media.
              */}
              {state.theme.featured.showOnList && (
                <FeaturedMedia id={item.featured_media} />
              )}
      </ImgArticle>

      <ArticleContent>
      
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <Categories categories={item.categories} />

      <div>
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              Écrit par {author.name}
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" "}
          le <span>{formatDate}</span>
        </PublishDate>
      </div>

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
      </ArticleContent>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h2`
  font-size: 1.550rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  margin-top: 40px;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  span {
    background: #FFFAF2;
    padding: 6px;
    color: #E07D22;
    border-radius: 5px;
    font-weight: 600;
  }
`;

const Excerpt = styled.div`
  font-size: 0.9em;
  line-height: 1.8em;
  color: rgba(12, 17, 43, 0.8);
`;

const Article = styled.article `
  flex: 1 1 25%;

  padding: 40px;

  border: 1px solid #343B4E;
  background-color: #fff;
  transition: all 0.2s;
  :hover {
      box-shadow: -4px 4px 0px #343B4E;
      transform: translateX(4px) translateY(-4px);
  }

  img {
    max-height: 250px;
  }
`

const ArticleContent = styled.div `
& :nth-child(3) {
  margin-top: 20px;
}
`

const ImgArticle = styled.div `
`