import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
    width: 240px;
    height: 100%;
    margin-top: 1.5em;
    background: #def9fc;
    border-radius: 5px;
    // margin-left: 10px;
    transition: 0.35s;

    li {
        padding-top: 1em;
    }

    ul {
        color: #4d8d94;
        padding-left: 1em;
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: #4d8d94;
    }
`;

const LinkContent = styled(Link)`
    padding: 0.5em;
    color: #4d8d94 !important;
    width: 200px;

    &:hover {
        transition: 0.35s;
        cursor: pointer;
        border-left: 6px solid #86d1d9;
    }
    &:active {
        border-left: 6px solid #86d1d9;
    }
`;

const Menu = () => (
    <Content>
        <ul>
            <li>
                <LinkContent to='/'>Home</LinkContent>
            </li>
            <li>
                <LinkContent to='/categories'>
                    Categories
                </LinkContent>
            </li>
        </ul>
    </Content>
);

export default Menu;
