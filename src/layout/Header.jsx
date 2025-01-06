import React from 'react';
import S from './style';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <S.Title>
            <NavLink to={"/"}>
                <h1>게시판 구현 연습</h1>
            </NavLink>
        </S.Title>
    );
};

export default Header;