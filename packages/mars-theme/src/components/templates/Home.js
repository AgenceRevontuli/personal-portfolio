import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";

const Home = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    return(
        <Section>
            
        </Section>
    )
}

export default connect(Home);

const Section = styled.div`
    width: 100%;
`
