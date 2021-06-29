import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Noteitem = ({ memo, Notes }) => {
    const handleDeleteNote = () => {
        console.log(memo.id)
        localStorage.setItem("Note", JSON.stringify(Notes.filter((data) => {return data.id !== memo.id})));
        
    }
    return (
        <S.Container>
            <S.Title>{memo.Title}</S.Title>
            <S.Memo>{memo.Note}</S.Memo>
            <Link to="/">
                <S.DeleteBtn onClick={handleDeleteNote}>❌</S.DeleteBtn>
            </Link>
            
        </S.Container>
    );
};

export default Noteitem;
