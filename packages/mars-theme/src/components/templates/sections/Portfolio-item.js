import React from "react";
import { connect, styled } from "frontity";
import Link from "../../link";
import FeaturedMedia from "../../featured-media";
import Categories from "./Categories";


const Item = ({ link, title, acf, featuredMediaId, categories }) => {

    return (
        <ProjetItem>
            <Content>
                <Link link={link}>
                    <h2>{title}</h2>
                </Link>
                <Categories 
                  categories={categories}
                />
                <Resume>{acf.resume}</Resume>
            </Content>
        </ProjetItem>
    )
}

export default connect(Item);

const ProjetItem = styled.div`
    position: relative;
    border: 1px solid #343B4E;
    width: 28%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 25px rgba(0,0,0,0.05);
`

const Content = styled.div`
    h2 {
      font-size: 1.5em;
    }
    h2 span {
        position: absolute;
    }
`

const Resume = styled.p`
    line-height: 1.8em;
`



