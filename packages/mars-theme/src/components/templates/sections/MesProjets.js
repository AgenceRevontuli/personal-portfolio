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
                <span>2022</span>
                <Portfolio />
            </Row>
        </Section>
    )
}

export default connect(MesProjets);

const Section = styled.div`
    padding: 150px 7%;
    background: url('https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp');
`

const Row = styled.div`
    position: relative;
    h2{
        font-size: 3em;
    }
    span {
        display: block;
        position: absolute;
        top: -170px;
        right: 0;
        font-size: 16em;
        font-weight: 900;
        opacity: 0.1;
    }
`
