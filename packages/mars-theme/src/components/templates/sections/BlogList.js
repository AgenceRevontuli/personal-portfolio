import React from 'react';
import { connect, styled } from "frontity";
import BlogItem from './BlogItem';

const BlogList = ({ state }) => {
    const data = state.source.get(state.router.link);

    return(
        <Section>
            {data.items.map(({type, id}) => {
                const post = state.source[type][id];
                return(
                    <BlogItem 
                        key={post.id}
                        post={post}
                    />
                )
            })}
        </Section>
    )
}

export default connect(BlogList);

const Section = styled.div`
    display: flex;
    gap: 30px;
`


