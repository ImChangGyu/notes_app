import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
    return (
        <S.Position>
            <Link to="/">
                <h1>Notes App</h1>
            </Link>
            <Link to="/create">
                <S.DefaultBtn>Create Note</S.DefaultBtn>
            </Link>
        </S.Position>
    );
};

export default Header;
