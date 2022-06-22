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
            <Html2React html={page.content.rendered} />
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
    max-width: 800px;
    margin: 0 auto;
    padding: 80px;
    box-shadow: 0px 10px 25px rgba(0,0,0,0.03);
    border-radius: 5px;
    margin-bottom: 80px;
    .form-row {
        display: flex;
        gap: 50px;
        justify-content: space-between;
    }

    .form-col {
        width: 100%;
    }

    textarea, label {
        width: 100%;
    }

    label {
       font-weight: 500;
    }

    input, textarea {
        display: block;
        box-sizing: border-box;
        border: inherit;
        margin: 15px 0px;
        padding: 15px 20px;
        border-radius: 5px;
        background: #f9f9f9;
        width: 100%;
        font-size: 16px;
        font-family: "Poppins";
        ::placeholder {
            color: #D0D0D0;
        }
    }

    input:focus, textarea:focus {
        outline: none;
        border: 2px solid #E07D22;
        border-radius: 5px;
    }

    input[type="submit"] {
        width: 300px;
        margin: 0 auto;
        display: inline-block;
        color: #fff;
        background: #E07D22;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.2s;
        :hover {
            transform: translateY(-3px);
            box-shadow: 0px 10px 25px rgba(0,0,0,0.15);
        }
    }
`

const Row = styled.div`
`