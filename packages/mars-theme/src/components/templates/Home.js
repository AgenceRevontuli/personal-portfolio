import React from 'react';
import { connect, styled } from "frontity";
import Intro from './sections/Intro';
import MesProjets from './sections/MesProjets';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import Link from "../link";



const Home = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return(
        <Section>
            <Article background="https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp">
                <HeroSection>
                    <HeroText>
                        <HeroSubTitle>
                            <div><p>Tristan TORNATORE - Freelance Marketing Digital</p></div>
                            <div><p>CAEN NORMANDIE ET PARIS</p></div>
                        </HeroSubTitle>
                        <h1>Développeur front-end<br/>Acquisition SEO & SEA<br/>Tracking & Analyse Data</h1>
                        <p><span>Je suis un développeur web Freelance basé en France, à Caen en Normandie. Ex-Google for Startups coordinateur, j’ai l’habitude de proposer des expériences digitales complètes du site web jusqu’à la stratégie d’acquisition. </span></p>
                    </HeroText>
                    <HeroImage>
                        <img src="https://www.tristantornatore.fr/wp-content/uploads/2022/07/Tristan-TORNATORE-Google-Vivatech.jpg" alt="Tristan Tornatore développeur front-end freelance et wordpress" />
                        <Flotte>
                            <img src="https://www.tristantornatore.fr/wp-content/uploads/2022/07/logo-react-js.svg" alt="" />
                        </Flotte>
                        <Flotte2>
                            <img src="https://www.tristantornatore.fr/wp-content/uploads/2022/07/adwords.svg" alt="" />
                        </Flotte2>
                    </HeroImage>
                    <SubMenu>
                        <ul>
                            <li>
                                <Link link="/developpeur-front-end/">
                                    À propos de moi
                                </Link>
                            </li>
                            <li>
                                <Link link="/developpeur-front-end/">
                                    Mon parcours
                                </Link>
                            </li>
                            <li>
                                <Link link="/contacter-tristan-freelance-wordpress/">
                                    Travailler avec moi
                                </Link>
                            </li>
                            <li>
                                <Link link="/astuces-digitales/">
                                    Mes astuces Digitales
                                </Link>
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
    padding: 200px 20%;
    background: url(${props => props.background || ""});
    @media screen and (max-width: 1920px) {
        padding: 80px 12%;
    }
    @media screen and (max-width: 680px) {
        padding: 40px 12%;
    }
`

const HeroSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: top;
    @media screen and (max-width: 680px) {
        display: flex;
        flex-wrap: wrap;
    }
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
    @media screen and (max-width: 680px) {
        text-align: center;
        h1 {
            font-size: 2em;
        }
        span {
        font-size: 1em;
    }
    }
`;

const HeroImage = styled.div`
    position: relative;
    grid-area: 1 / 3 / 4 / 4;
    text-align: right;
    max-height: 500px; 
    width: 450px;
    img {
        max-width: 100%;
        max-height: 100%;
        margin-left: 50px; 
        margin-top: 70px;
        object-fit: cover;
    }
    @media screen and (max-width: 680px) {
       text-align: center;
       width: 100%;
       height: 370px;
       img {
        width: 100%;
        margin-left: 0px; 
        margin-top: 40px;
        object-fit: cover;
        object-position: center top;
    }
    margin-bottom: 80px;
    }
`;

const Flotte = styled.div`
    width: 60px;
    img {
        object-position: inherit;
        position: absolute;
        top: 20%;
        left: 20px;
        background: #fff; 
        width: 60px;
        height: 60px;
        padding: 10px;
        border-radius: 50%;
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.06);
            transform: translatey(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.02);
            transform: translatey(-20px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.06);
            transform: translatey(0px);
        }
    }

    @media screen and (max-width: 680px) {
        img {
            left: -20px;
        }
    }

`

const Flotte2 = styled.div`
    position: absolute;
    top: 50%;
    right: -60px;
    width: 60px;
    img {
        object-position: inherit;
        background: #fff; 
        width: 60px;
        height: 60px;
        padding: 10px;
        border-radius: 50%;
        animation: floating 4s ease-in-out infinite;
    }

    @keyframes floating {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.06);
            transform: translatey(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.02);
            transform: translatey(-20px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.06);
            transform: translatey(0px);
        }
    }

    @media screen and (max-width: 680px) {
        right: 0px;
    }

`

const HeroSubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #343B4E;
    @media screen and (max-width: 680px) {
       flex-wrap: wrap-reverse;
       justify-content: center;
       text-align: center;
       font-weight: 700;
       font-size: 0.8em;
    }
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

    @media screen and (max-width: 680px) {
        display: none;
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
    @media screen and (max-width: 680px) {
        text-align: center;
        width: 100%;
        img {
            width: 3%;
            position: inherit;
        }
    }
`