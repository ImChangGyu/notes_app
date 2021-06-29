import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 280px;
    background-color: #e9ecef;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 50px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    position: relative;
`;
export const Title = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin: 30px 30px 5px 30px;
`;
export const Memo = styled.span`
    font-size: 16px;
    margin: 5px 30px 0 30px;
    word-break: break-all;
`;
export const DeleteBtn = styled.div`
    cursor: pointer;
    position: absolute;
    right: 8%;
    top: 8%;
`;
