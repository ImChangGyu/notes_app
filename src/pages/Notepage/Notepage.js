import React from "react";
import { Header, Noteitem } from "../../components/";
import * as S from "./style";

const Notepage = () => {
    
    const getNote = () => {
        const notesJSON = localStorage.getItem("Note");
        try {
            return notesJSON ? JSON.parse(notesJSON) : [];
        } catch (e) {
            return [];
        }
    };
    let Notes = getNote();
    
    return (
        <>
            <Header />
            <S.Position>
                {React.Children.toArray(
                    Notes.map((data) => {
                        return <Noteitem memo={data} Notes={Notes}/>;
                    })
                )}
            </S.Position>
        </>
    );
};

export default Notepage;
