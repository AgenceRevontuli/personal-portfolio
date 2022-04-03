import React from 'react';
import { connect, styled } from "frontity";



const Intro = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return(
        <Section>
            <Row>
                <ColLeft>
                    <span>Bonjour.<br/>Je suis Tristan</span>
                    <h2>Freelance web depuis 6 ans</h2>
                </ColLeft>
                <ColRight>
                    <p>Je mets à profit ma passion pour le digital pour vous aider à créer des expériences web originales et créatives. Mes compétences 360° vous permettront d’allier la puissance d’une page web qui convertit avec une stratégie d’acquisition personnalisée pour votre projet et atteindre vos objectifs Business.</p>
                </ColRight>
                <RowBottom>
                    <p>Découvrir mon parcours <img src="https://www.tristantornatore.fr/wp-content/uploads/2022/03/Arrow-2.svg" alt="flèche qui pointe vers le bas" /></p>
                </RowBottom>
            </Row>
        </Section>
    )
}

export default connect(Intro);

const Section = styled.div`
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`

const ColLeft = styled.div`
    grid-area: 1 / 1 / 3 / 8;
    font-family: 'Space Grotesk', sans-serif;
    span {
        font-size: 4em;
        font-weight: 800;
    }
    h2 {
        font-size: 2.5em;
        color: #ADADAD;
        font-weight: 500;
    }
`

const ColRight = styled.div`
    grid-area: 1 / 8 / 3 / 13;
    p {
        font-size: 1.3em;
        line-height: 1.8em;
        font-weight: 400;
    }
`

const RowBottom = styled.div`
    grid-area: 3 / 1 / 4 / 13;
    text-align: right;
    font-size: 18px;
    margin-top: 30px;
    font-weight: 600;
    img {
        margin-left: 40px;
        transform: translateY(2px);
    }
`