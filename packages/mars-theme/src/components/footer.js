import React from 'react';
import { connect, styled } from "frontity";



const Footer = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return(
        <Section>
            <Row>
                <Col1>
                    <h3>Tristan Tornatore</h3>
                    <p>Freelance développeur web front-end et wordpress depuis 2018. Basé à Caen en Normandie, France. Ex-Coordinateur chez Google for Startups à Station F. J’accompagne mes clients sur leur campagnes Google Ads, Facebook Ads et sur le référencement naturel (SEO).</p>
                </Col1>
                <Col2>
                    <h3>Freelance digital</h3>
                    <p>Freelance wordpress à Caen</p>
                    <p>Freelance Google Ads à Caen</p>
                    <p>Freelance Facebook Ads à Caen</p>
                    <p>Freelance wordpress à Caen</p>
                    <p>Freelance wordpress à Caen</p>
                </Col2>
                <Col3>
                    <h3>Informations utiles</h3>
                    <p>Mention Légales</p>
                    <p>Politique de confidentialité</p>
                    <p>06 31 49 63 05</p>
                    <p>tristan@revontuli.fr</p>
                </Col3>
                <Copyright>
                    <p>© Design et Développement par Tristan Tornatore - 2022</p>
                </Copyright>
            </Row>
        </Section>
    )
}

export default connect(Footer);

const Section = styled.div`
    padding: 150px 7% 30px 7%;
    background: url('https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp');

`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 0px;
    h3 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.3em;
    }
`

const Col1 = styled.div`
    grid-area: 1 / 1 / 4 / 7;
    h3 {
        text-transform: uppercase;
    }
    p {
        line-height: 2em;
    }
`

const Col2 = styled.div`
    grid-area: 1 / 7 / 4 / 10;
`

const Col3 = styled.div`
    grid-area: 1 / 10 / 4 / 13;
`

const Copyright = styled.div`
    grid-area: 2 / 1 / 3 / 13;
    text-align: center;
    margin-top: 200px;
`