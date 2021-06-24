import styled from "styled-components";

export const Position = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
    a {
        text-decoration: none;
    }
    h1 {
        color: #333;
    }
`;

export const DefaultBtn = styled.div`
    cursor: pointer;
    width: 140px;
    height: 50px;
    background-color: #868e96;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    box-shadow: 1px 1px 1px 1px gray;
`;
