import React from "react";
import { connect, styled } from "frontity";


const categories = ({ state, categories }) => {
    const data = state.source.category;

    return (
        <Section>
            <Row>
                {categories.map((items => {
                    return(
                        <Category key={items}>
                            <h4>{data[items].name}</h4>
                        </Category>
                    )
                }))}
            </Row>
        </Section>
    )
}

export default connect(categories);

const Section = styled.div`
`

const Row = styled.div`
    display: flex;
`

const Category = styled.div`
    padding: 5px 10px;
    border: 2px solid #343B4E;
    border-radius: 2px;
    margin-right: 10px;
    display: inline-block;
    h4 {
        margin: 0;
        font-size: 0.8em;
    }
    ::last-child {
        margin-right: 0px;
    }
`
