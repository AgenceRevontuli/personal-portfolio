import React from "react";
import { connect, styled } from "frontity";


const TestimonialsItem = ({ testimonial }) => {

    return (
        <Testimonial>
            <div>
                <img src={testimonial.acf.testimonialsPic.url} alt={testimonial.acf.testimonialsPic.alt} />
                <div>
                    <h3>{testimonial.acf.testimonialsName}</h3>
                    <p><span>{testimonial.acf.testimonialsCompagny}</span></p>
                </div>
            </div>
            <p>{testimonial.acf.testimonialsContent}</p>
        </Testimonial>
    )
}

export default connect(TestimonialsItem);

const Testimonial = styled.div`
    border: 1px solid #343B4E;
    width: 800px;
    padding: 50px;
    box-shadow: -4px 4px 0px #343B4E;
    img {
        max-width: 100px;
        border-radius: 50%;
    }
    h3 {
        font-size: 2em;
        margin-bottom: 0px;
    }
    p {
        line-height: 2em;
    }
    > div {
        display: flex;
        align-items: center;
        gap: 40px;
    }
    @media screen and (max-width: 680px) {
        width: 100%;
        > div {
        flex-wrap: wrap;
        gap: 30px;
    }
    }
`
