import React from 'react';
import { connect, styled } from "frontity";
import Link from "../../link";
import FeaturedMedia from "../../featured-media";
import dayjs from "dayjs";
import 'dayjs/locale/fr';
import Categories from './Categories';



const BlogItem = ({ state, post }) => {
    const date = dayjs(post.date).locale('fr').format("DD MMMM YYYY");

    return(
        <BlogPublication>
            <Link link={post.link}>
                {state.theme.featured.showOnList && (
                    <FeaturedMedia id={post.featured_media} />
                )}
             
             <PublicationContent>
                 <Categories categories={post.categories} />
                <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <div>
                    <PublishDate>
                        {" "}
                        Publié le {date}
                    </PublishDate>
                </div>
                {/* If the post has an excerpt (short summary text), we render it */}
                {post.excerpt && (
                    <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                )}
             </PublicationContent>
            </Link>
        </BlogPublication>
    )
}

export default connect(BlogItem);

const BlogPublication = styled.div`
    flex: 1 1 25%;
    border: 1px solid #343B4E;
    background-color: #fff;
    transition: all 0.2s;
    :hover {
        box-shadow: -4px 4px 0px #343B4E;
        transform: translateX(4px) translateY(-4px);
    }
`


const Title = styled.h2`
    font-size: 1.5em;
`

const PublicationContent = styled.div`
    padding: 40px;
`

const PublishDate = styled.div`
    font-size: 0.8em;
`

const Excerpt = styled.div`
    border-top: 1px solid #343B4E;
    margin-top: 10px;
    line-height: 1.9em;
`