import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";


const Developp  = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component;

    return(
        <Section>
           <Header>
                <h1>Trouvez le partenaire idéal pour la réalisation de votre site internet</h1>
                <SubHeader>
                    <div>
                        <Image1>
                            <img src="https://www.tristantornatore.fr/wp-content/uploads/2022/06/developpement-site-internet-freelance.jpg" alt="developpement-site-internet-freelance" />
                        </Image1>
                    </div>
                    <div>
                        <p>Vous cherchez un prestataire pour le développement de votre site internet ? Découvrez comment nous pouvons collaborer sur votre projet et profitez des conseils d'un expert à la fois technique et stratégique pour répondre au plus près de votre besoin digital. </p>
                        <Link>
                            <ButtonPrincipal>
                                PROPOSER UN PROJET
                            </ButtonPrincipal>
                        </Link>
                    </div>
                </SubHeader>
           </Header>
           <Article background="https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp">
                <SiteItems>
                    <SiteItem>
                        <h2>Site vitrine</h2>
                        <p>Création de site pour développer votre présence en ligne, mettre en avant vos valeurs et générer de la génération de leads grâce à un copywriting travaillé.</p>
                    </SiteItem>
                    <SiteItem>
                        <h2>Site E-commerce</h2>
                        <p>Création de site de vente en ligne pour digitaliser votre entreprise et optimiser votre tunnel de vente afin d'avoir le meilleur taux de conversion possible.</p>
                    </SiteItem>
                </SiteItems>
           </Article>
           <Article background="https://www.tristantornatore.fr/wp-content/uploads/2022/03/background-noise.webp">
                <Quote>
                    <p>Je développe des <strong>sites sur-mesures</strong> adaptés à vos objectifs avec une prise en main simple et entièrement <strong>modifiable par vos soins.</strong></p>
                </Quote>
           </Article>
           <Article>
                <InfoSite>
                    <div>
                        <div>
                            <h2>Vous avez besoin d'un site internet simple</h2>
                            <h3>Réalisation de site sous wordpress</h3>
                            <p>Votre besoin est simple. Vous souhaite un site e-commerce, un site de partage, une marketplace ou un blog, nous développons pour vous un site wordpress sur-mesure. Wordpress équipe 46% des sites internet dans le monde. Reconnu pour être flexible et entièrement personnalisable, c'est la star des site vitrine et des site e-commerce. Pourtant vous pourriez entendre qu'il n'est pas bien optimisé pour la rapidité. C'est ici que j'interviens pour développer un site complet et optimisé pour votre référencement naturel en proposant une solution unique qui évite les principaux plugins connus pour ralentir votre site.</p>
                        </div>
                        <div>
                            <ul>
                                <li>Design d'une maquette éditable sous figma, vous êtes inclu dans la création graphique de votre site</li>
                                <li>Création d'un thème sur mesure fidèle à la maquette</li>
                                <li>Développement des fonctionnalités et intégration des plugins</li>
                                <li>Personnalisation du backOffice pour vous permettre une interface de gestion simple pour votre site</li>
                                <li>Optimisation du temps de chargement</li>
                                <li>Optimisation de votre référencement naturel</li>
                                <li>Sécurisation et mise en ligne du site</li>
                            </ul>
                        </div>
                    </div>
                    
                </InfoSite>
                <InfoSite>
                    <div>
                        <div>
                            <h2>Ou un projet de développement plus poussé</h2>
                            <h3>Je développe votre webapp sous reactJS</h3>
                            <p>Vous avez un projet plus ambitieux qu'un site vitrine ou e-commerce ? Je développe des solutions qui répondent à des besoins plus précis sous reactJS, le célèbre framework développé par Facebook qui équipe des site web comme Airbnb ou Netflix. Je réflechis avec vous à la création du besoin en développant des users stories et préparant les sprints de développement étape par étape. Vous souhaitez éditez votre application avec wordpress ? J'ai l'habitude de développer des solutions avec wordpress HeadLess et d'autres fonctionnalités.</p>
                        </div>
                        <div>
                            <ul>
                                <li>Construction des users stories</li>
                                <li>Préparation des recommandations techniques</li>
                                <li>Création des maquettes sous figma</li>
                                <li>Gestion de projet et planification sous jira</li>
                                <li>Développement des différents sprints</li>
                                <li>Gestion des tickets</li>
                                <li>Sécurisation et mise en ligne du site</li>
                            </ul>
                        </div>
                    </div>
                    
                </InfoSite>
           </Article>
        </Section>
    )
}

export default connect(Developp);

const Section = styled.div`
    @media screen and (max-width: 1920px) {
        padding: 80px 12%;
    }
`;

const Article = styled.div`
    padding: 100px 20%;
    background: url(${props => props.background || ""});
    strong {
        background: #343B4E;
        color: #fff;
        padding: 0px 15px;
    }
`

const SiteItems = styled.div`
    display: flex;
    gap: 40px;
`

const Quote = styled.div `
    text-align: center;
    font-size: 5em;
`

const SiteItem = styled.div`
    border: 2px solid #343B4E;
    padding: 30px;
    line-height: 2.2em;
    h2 {
        font-size: 3em;
    }
`

const Header = styled.div`
    padding: 200px 20%;
    position: relative;
    h1 {
        font-size: 5.55em;
    }
`

const SubHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 40px;
    justify-content: space-between;

    p {
        max-width: 800px;
        line-height: 2.2em;
        font-size: 1.3em;
        margin-bottom: 40px;
    }
`

const Image1 = styled.div`
    margin-left: 80px;
    img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 50%;
        padding: 10px;
        border: 1px dashed #343B4E;
    }
`
const ButtonPrincipal = styled.div`
    border: 2px solid #343B4E;
    padding: 10px 20px;
    display: inline-block;
    transition: all 0.2s;
    :hover {
        box-shadow: -4px 4px 0px #343B4E;
        transform: translateX(4px) translateY(-4px);
    }
`

const InfoSite = styled.div`
    margin-bottom: 200px;
    &:last-child {
        margin-bottom: 0px;
    }

    & > div {
        display: flex;
        gap: 40px;
        align-items: center;
        div {
            max-width: 50%;
        }
        line-height: 2em;
    }

    h2 {
        font-size: 3em;
        line-height: 1.6em;
    }
    h3 {
        font-size: 2em;
    }
    ul {
        list-style: none;
    }
    li {
        font-size: 1.3em;
        padding: 15px;
        font-family: 'Space Grotesk', sans-serif;
        border-bottom: 1px solid #343B4E;
    }
`