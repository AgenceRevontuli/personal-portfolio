import React from 'react';
import { connect, styled } from "frontity";



const PrestaDigitale = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return(
        <Section>
            <Row>
                <h2>Acquisition de trafic</h2>
            </Row>
        </Section>
    )
}

export default connect(PrestaDigitale);

const Section = styled.div`
    padding: 150px 7%;
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
