import React from 'react';
import { connect, styled } from "frontity";
import Portfolio from './Portfolio';



const MesProjets = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return(
        <Section>
            <Row>
                <h2>Sélection de projets Web</h2>
                <p>Des références de clients avec qui j'ai eu la chance de collaborer sur leur stratégie digitale et leur besoin de création et refonte de site internet</p>
                <Years>2022</Years>
                <Portfolio />
            </Row>
        </Section>
    )
}

export default connect(MesProjets);

const Section = styled.div`
`

const Row = styled.div`
    position: relative;
    h2{
        font-size: 3em;
    }
    p {
        max-width: 600px;
        line-height: 1.8em;
        margin-bottom: 80px;
    }
`

const Years = styled.span `
    display: block;
    position: absolute;
    top: -170px;
    right: 0;
    font-size: 16em;
    font-weight: 900;
    opacity: 0.1;
`
