import React from 'react';
import { connect, styled } from "frontity";
import Link from "../link";
import Iframe from "@frontity/components/iframe";


const About = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    console.log(page);

    return(
        <Section>
           <Row>
                <PhotoProfil>
                    <OnImage>
                        <h2>Tristan TORNATORE 🦊</h2>
                        <p>tristan@revontuli.fr</p>
                        <Link link={page.acf.linkedin} target="_blank">
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                        </Link>
                    </OnImage>
                    <img src={page.acf.photoProfil.url} alt={page.acf.photoProfil.alt} />
                </PhotoProfil>
                <div>
                    <h1>Freelance développeur web et stratégie d'acquisition</h1>
                    <p>Depuis 6 ans, je me passionne pour l'expérience utilisateur, le développement de site web front-end et le tracking de Data sur les sites internet.</p>
                </div>
           </Row>
           <Article>
                <h2>Mon parcours et mes expériences</h2>
                <ArticleContent>
                    <div>
                        <h3>2022 : Je me consacre de nouveau à mon activité de Freelance à 100%</h3>
                        <p>Durant la pandémie de Covid, la baisse d'activité de l'accompagnement de Startups me permets de me recentrer sur mon activité de développeur web et de freelance en acquisition de trafic pour mes clients. J'en profite pour revenir dans ma Normandie natale.</p>
                        <h3>2020 : Je rejoins Station F pour lancer le programme Google for Startups en France</h3>
                        <p>Google me propose une mission longue durée de 2 ans à Paris, à Station F pour développer le programme Google for Startups France. Pendant 2 ans, j'ai eu l'opportunité d'accompagner plus de 2 000 startups dans l'élaboration de leur stratégie d'acquisition et de tracking Data.</p>
                        <h3>2018 : J'interviens en tant que Coach pour Google Ateliers Numériques</h3>
                        <p>J'ai l'opportunité de rejoindre les Ateliers Numériques de Google pour qui je me déplace partout sur le territoire Français pour intervenir et accompagner les entreprises lors de conférences organisées par les CCI. Puis je m'installe à Rennes, où à côté de mon activité de Freelance, j'interviens à l'atelier Google présent sur place.</p>
                        <h3>2016 : Lancement de mon activité de Freelance en qualité de développeur web à 100%</h3>
                        <p>C'est en 2016 après 4 ans en entreprise et un master en stratégie digitale en poche que je lance mon activité de Freelance pour accompagner mes clients dans le développement de leur site internet. En parallèle j'en profite pour lancer ma première Startup : Trouve Ton Mojo.</p>
                    </div>
                    <Competences>
                        <h4>Développeur Front-End</h4>
                        <h4>Création de site Wordpress</h4>
                        <h4>ReactJS</h4>
                        <h4>Javascript</h4>
                        <h4>Prototype</h4>
                        <h4>Maquettage Figma</h4>
                        <h4>UX Design</h4>
                        <h4>UI Design</h4>
                        <h4>Google Tag Manager</h4>
                        <h4>Google Analytics 4</h4>
                        <h4>Matomo</h4>
                        <h4>Airtable</h4>
                        <h4>Zapier</h4>
                        <h4>Notion</h4>
                        <h4>Je fais aussi le café ☕️</h4>
                        <h4>Google Ads</h4>
                        <h4>Référencement naturel - SEO</h4>
                    </Competences>
                </ArticleContent>
           </Article>
           <Article>
                <h2>Ma Playlist Spotify</h2>
                <ArticleContent>
                    <div>
                        <h3>Ma playlist pour développer des sites web</h3>
                        <p>Est-ce que ce n'est pas la meilleure façon de découvrir un profil que de connaître ses goûts musicaux ? Vous trouverez la playlist de titres favoris que j'écoute en développant ! Merci de ne pas juger trop fort. </p>
                    </div>
                    <div>
                        <Iframe
                            src="https://open.spotify.com/embed/playlist/3b6yCJ30ZZoknaadcCMDd0?utm_source=generator&theme=0"
                            Title="Spotify"
                            Height="80"
                            Width="100%"
                            className="Spotify"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        />
                    </div>
                </ArticleContent>
           </Article>
        </Section>
    )
}

export default connect(About);

const Section = styled.div`
`;

const Row = styled.div`
    padding: 150px 20%;
    display: flex;
    gap: 80px;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 4.8em;
    }
    p {
        font-size: 1.5em;
        line-height: 2em;
    }
`;

const PhotoProfil = styled.div`
    position: relative;
    width: 40%;
    img {
        border: 1px solid #343B4E;
        box-shadow: -4px 4px 0px #343B4E;
    }
`;

const OnImage = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 20px;
    padding: 20px;
    background: rgba(205, 205, 205, 0.65);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.6px);
    -webkit-backdrop-filter: blur(10.6px);
    color: #fff;
    p {
        font-size: 1em;
        line-height: 2em;
    }
    h2 {
        font-size: 2em;
        margin: 0;
    }
    svg {
        fill: #fff;
    }
`;

const Article = styled.div`
    padding: 40px 20% 150px 20%;
    h2 {
        font-size: 4em;
    }
`


const ArticleContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
    h3 {
        font-size: 1.5em;
        line-height: 1.5em;
    }
    p {
        font-size: 1em;
        line-height: 2em;
    }
    div {
        width: 50%;
    }
`

const Competences = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 30px;
    h4 {
        display: block;
        margin: 0;
        text-align: center;
        min-width: 100px;
        padding: 20px;
        border: 1px solid #343B4E;
        box-shadow: -4px 4px 0px #343B4E;
    }
`