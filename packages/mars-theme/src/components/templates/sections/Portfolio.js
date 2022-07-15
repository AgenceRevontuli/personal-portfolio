import React from "react";
import { connect, styled } from "frontity";
import Item from "./Portfolio-item";


const portfolio = ({ state }) => {
    const data = state.source.get("/projets/");

    return (
        <Section>
            <Row>
                {data.items.map(({ type, id }) => {
                    const item = state.source[type][id];
                    const acf = state.source[type][id].acf;
                    const category = state.source[type][id].categories;
                    const {link, featured_media, title: { rendered: titleRendered}} = item
                    return <Item 
                        key={item.id} 
                        link={link} 
                        title={titleRendered}
                        acf={acf}
                        categories={category}
                        featuredMediaId={featured_media}
                    />;
                })}
            </Row>
        </Section>
    )
}

export default connect(portfolio);

const Section = styled.div`
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`
