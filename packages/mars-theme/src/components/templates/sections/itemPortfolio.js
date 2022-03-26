import React from 'react';
import { connect, styled } from "frontity";



const ItemPortfolio = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return(
        <Section>
            <Row>
            </Row>
        </Section>
    )
}

export default connect(ItemPortfolio);

const Section = styled.div`
`

const Row = styled.div`
`
