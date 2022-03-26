import React from 'react';
import { connect, styled } from "frontity";



const Blog = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return(
        <Section>
            <Row>
                <ColLeft>
                    <h2>Mes astuces et conseils pour votre stratégie digitale</h2>
                </ColLeft>
                <ColRight>
                    <p>Retrouvez mes articles de blog et mes vidéos dans lesquels je vous partage ma veille, mes actualités et mes astuces pour optimiser votre visibilité sur le web, remplir vos objectifs grâce à une stratégie digitale bien définie. On parle wordpress, Front-end, Google Analytics, Google Tag Manager et bien d’autres choses 😉</p>
                </ColRight>
            </Row>
        </Section>
    )
}

export default connect(Blog);

const Section = styled.div`
    padding: 150px 7%;
    background: url('https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp');

`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 50px;
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
        font-size: 3em;
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
