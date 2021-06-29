import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import * as S from "./style";

const Write = () => {
    const [Note, setNote] = useState([]);
    const [Title, setTitle] = useState([]);
    let [id, setId] = useState(nanoid());
    const TitleChange = (e) => {
        setTitle(e.target.value);
    };
    const MemoChange = (e) => {
        setNote(e.target.value);
    };
    const ClickHandler = () => {
        let NoteStorageItem = localStorage.getItem("Note");
        try {
            NoteStorageItem = NoteStorageItem ? JSON.parse(NoteStorageItem) :  [];
            NoteStorageItem.push({ id, Title, Note });
            localStorage.setItem("Note", JSON.stringify(NoteStorageItem));
        } catch (e) {
            console.log(e);
            return [];
        }
        
    };
    return (
        <>
            <S.TitleBox
                placeholder="제목을 작성해줘 ✏️"
                onChange={TitleChange}
            />
            <S.MemoBox placeholder="내용을 작성해줘 ✏️" onChange={MemoChange} />
            <S.BtnContainer>
                <Link to="/">
                    <S.DefaultBtn onClick={ClickHandler}>Create Note</S.DefaultBtn>
                </Link>
                <S.RedBtn>Delete Note</S.RedBtn>
            </S.BtnContainer>
        </>
    );
};

export default Write;
