import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const AllPostPage = () => {
    return (
        <div>
            <S.btnWrapper>
                <Link to="/write">
                    <S.CreatePostBtn>새 글 작성하기</S.CreatePostBtn>
                </Link>
            </S.btnWrapper>
            <S.Container>
                <S.PostContainer>
                    <S.PostTitle>제목</S.PostTitle>
                    <S.PostContent>내용</S.PostContent>
                    <S.TagListContainer>
                        <S.TagListName>
                            태그내용
                        </S.TagListName>
                    </S.TagListContainer>
                    <S.CreatedDateContainer>
                        <span>생성 날짜</span>
                    </S.CreatedDateContainer>
                </S.PostContainer>
            </S.Container>
        </div>
    );
};

export default AllPostPage;