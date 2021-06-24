import React from "react";
import * as S from "./style";

const Noteitem = ({ memo }) => {
    console.log(memo);
    return (
        <S.Container>
            <S.Title>{memo.Title}</S.Title>
            <S.Memo>{memo.Note}</S.Memo>
        </S.Container>
    );
};

export default Noteitem;
