import { useEffect } from "react";
import { connect, styled } from "frontity";


const Contact = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    console.log(page);
    const Html2React = libraries.html2react.Component;

    return(
        <Section>
           <Header>
                <h2>Je serais ravi de discuter avec vous 🦊</h2>
                <h1>Commençons simplement, qu'est ce que je peux faire pour vous ?</h1>
                <p>Un projet, besoin d'un conseil, je vous propose que l'on se contacte rapidement pour échanger ensemble sur vos problématiques et trouver les solutions rapidement.</p>
           </Header>
           <ContactForm>
           </ContactForm>
        </Section>
    )
}

export default connect(Contact);

const Section = styled.div`
`;

const Header = styled.div`
    text-align: center;
    max-width: 900px;
    margin: 80px auto;
    h1 {
        font-size: 4em;
    }
    p {
        max-width: 700px;
        margin: 0 auto;
        line-height: 2em;
    }
`


const ContactForm = styled.div`
`

const Row = styled.div`
`