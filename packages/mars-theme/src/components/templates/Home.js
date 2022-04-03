import React from 'react';
import { connect, styled } from "frontity";
import Intro from './sections/Intro';
import MesProjets from './sections/MesProjets';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';




const Home = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return(
        <Section>
            <Article background="https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp">
                <HeroSection>
                    <HeroText>
                        <HeroSubTitle>
                            <div><p>Freelance Digital</p></div>
                            <div><p>CAEN NORMANDIE ET PARIS</p></div>
                        </HeroSubTitle>
                        <h1>Développeur front-end<br/>Acquisition SEO & SEA<br/>Tracking & Analyse Data</h1>
                        <p><span>Je suis un développeur web Freelance basé en France, à Caen en Normandie. Ex-Google for Startups coordinateur, j’ai l’habitude de proposer des expériences digitales complètes du site web jusqu’à la stratégie d’acquisition. </span></p>
                    </HeroText>
                    <HeroImage>
                        <img src="https://www.tristantornatore.fr/wp-content/uploads/2022/03/Freelance-Developpeur-Web-Caen-Tristan-Tornatore.jpg" alt="Tristan Tornatore développeur front-end freelance et wordpress" />
                    </HeroImage>
                    <SubMenu>
                        <ul>
                            <li>
                                À propos de moi
                            </li>
                            <li>
                                Mon parcours
                            </li>
                            <li>
                                Travailler avec moi
                            </li>
                            <li>
                                Mes astuces Digitales
                            </li>
                        </ul>
                    </SubMenu>
                    <ArrowDown><img src="https://www.tristantornatore.fr/wp-content/uploads/2022/03/Arrow-down.svg" alt="flèche qui pointe vers le bas" /></ArrowDown>
                </HeroSection>
            </Article>
            <Article>
                <Intro />
            </Article>
            <Article background="https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp">
                <MesProjets />
            </Article>
            <Article>
                <Testimonials />
            </Article>
            <Article background="https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp">
                <Blog />
            </Article>
        </Section>
    )
}

export default connect(Home);

const Section = styled.div`
`;

const Article = styled.div`
    padding: 200px 7%;
    background: url(${props => props.background || ""});
    @media screen and (max-width: 1920px) {
        padding: 80px 12%;
    }
`

const HeroSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    alignItems: top;
`;

const HeroText = styled.div`
    grid-area: 1 / 1 / 4 / 3; 
    h1 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 4em;
    }
    span {
        font-size: 1.5em;
        line-height: 1.8em;
    }
`;

const HeroImage = styled.div`
    grid-area: 1 / 3 / 4 / 4;
    text-align: right;
    img {
        max-width: 100%;
        border: 1px solid #343B4E;
        border-radius: 15px;
        margin-left: 50px; 
        margin-top: 70px;
    }
`;

const HeroSubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #343B4E;
`;

const SubMenu = styled.div`
    margin-top: 80px;
    align-self: flex-end;
    grid-area: 4 / 1 / 5 / 3; 
    ul {
        padding: 0;
        list-style: none;
        display: inline-block;
        border-top: 1px solid #343B4E;
        border-bottom: 1px solid #343B4E;
        li {
            min-width: 150px;
            display: inline-block;
            text-align: center;
            padding: 15px 15px 15px 0px;
            border-right: 1px solid #343B4E;
            margin-right: 15px;
        }
        li:last-child {
            margin-right: 0px;
            border-right: none;
        }
    }
    @media screen and (max-width: 1920px) {
        align-self: flex-start;
        margin-top: 50px;
      }
`

const ArrowDown = styled.div`
    grid-area: 4 / 3 / 5 / 4;
    position: relative; 
    margin-top: 80px;
    img {
        position: absolute; 
        top: 0;
        right: 0;
    }
    @media screen and (max-width: 1920px) {
        margin-top: 30px;
      }
`