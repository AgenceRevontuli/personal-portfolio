import React, { useEffect } from "react";
import { connect, styled } from "frontity";


const portfolio = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link)
    useEffect(() => {
        actions.source.fetch("/projets/");
      }, []);
      console.log(state.source.get("/projets/"));

    return(
        <Section>
            <Row>
            </Row>
        </Section>
    )
}

export default connect(portfolio);

const Section = styled.div`
`

const Row = styled.div`
`

const Item = styled.div`
`
