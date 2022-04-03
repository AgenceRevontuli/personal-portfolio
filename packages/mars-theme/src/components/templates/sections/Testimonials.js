import React from 'react';
import { connect, styled } from "frontity";
import TestimonialsItem from './TestimonialsItem';



const Testimonials = ({ state }) => {
    const data = state.source.get("/temoignages/");

    return(
        <Section>
            <Row>
                <h2>Témoignages Clients</h2>
            </Row>
            <ListeTemoignages>
                {data.items.map(({ type, id }) => {
                    const item = state.source[type][id];
                    return(
                        <TestimonialsItem
                            key={item.id}
                            testimonial={item}
                        />
                    )
                })}
            </ListeTemoignages>
        </Section>
    )
}

export default connect(Testimonials);

const Section = styled.div`
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

const ListeTemoignages = styled.div`
    display: flex;
    gap: 30px;
`