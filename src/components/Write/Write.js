import React, { useState } from "react";
import * as S from "./style";

const Write = () => {
    const [Note, setNote] = useState([]);
    const [Title, setTitle] = useState([]);
    const TitleChange = (e) => {
        setTitle(e.target.value);
    };
    const MemoChange = (e) => {
        setNote(e.target.value);
    };
    const ClickHandler = (e) => {
        let NoteStorageItem = JSON.parse(localStorage.getItem("Note") || []);
        NoteStorageItem.push({ Title, Note });
        localStorage.setItem("Note", JSON.stringify(NoteStorageItem));
    };
    return (
        <>
            <S.TitleBox
                placeholder="제목을 작성해줘 ✏️"
                onChange={TitleChange}
            />
            <S.MemoBox placeholder="내용을 작성해줘 ✏️" onChange={MemoChange} />
            <S.BtnContainer>
                <S.DefaultBtn onClick={ClickHandler}>Create Note</S.DefaultBtn>
                <S.RedBtn>Delete Note</S.RedBtn>
            </S.BtnContainer>
        </>
    );
};

export default Write;
