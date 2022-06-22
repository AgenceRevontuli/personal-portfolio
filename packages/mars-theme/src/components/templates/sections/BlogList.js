import React from 'react';
import { connect, styled } from "frontity";
import BlogItem from './BlogItem';
import Link from "./../../link";

const BlogList = ({ state }) => {
    const data = state.source.get(state.router.link);

    return(
        <Section>
            <Items>
                {data.items.slice(0,3).map(({type, id}) => {
                    const post = state.source[type][id];
                    return(
                        <BlogItem 
                            key={post.id}
                            post={post}
                        />
                    )
                })}
            </Items>
            <Button>
                <Link link="/astuces-digitales/">Voir tous les articles</Link>
            </Button>
        </Section>
    )
}

export default connect(BlogList);

const Section = styled.div`

`

const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
`

const Button = styled.div`
    text-align: center;
    margin: 80px auto;
    a {
        border-bottom: 2px solid #E07D22;
        padding-bottom: 8px;
    }
`

