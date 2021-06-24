import styled from "styled-components";

export const TitleBox = styled.input`
    width: 81vh;
    height: 7vh;
    background-color: #e9ecef;
    margin-top: 10vh;
    border-radius: 50px;
    border: none;
    outline: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 15px;
    font-size: 3vh;
`;

export const MemoBox = styled.textarea`
    width: 81vh;
    height: 50vh;
    background-color: #e9ecef;
    margin-top: 5vh;
    border-radius: 50px;
    outline: none;
    border: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 0 0 15px;
    font-size: 2vh;
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const BtnContainer = styled.div`
    display: flex;
    justify-content: end;
`;
export const DefaultBtn = styled.div`
    cursor: pointer;
    width: 140px;
    height: 50px;
    background-color: #868e96;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    box-shadow: 1px 1px 1px 1px gray;
    margin: 30px 10px 0 10px;
`;

export const RedBtn = styled.div`
    cursor: pointer;
    width: 140px;
    height: 50px;
    background-color: #fa5252;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    box-shadow: 1px 1px 1px 1px gray;
    margin: 30px 10px 0 10px;
`;
