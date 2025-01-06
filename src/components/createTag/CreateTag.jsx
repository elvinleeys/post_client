import React from 'react';
import S from './style';

const CreateTag = ({index, tagName, removeTag}) => {

    return (
        <S.TagContainer>
            <S.TagName>{tagName}</S.TagName>
            <S.TagBtn onClick={() => removeTag(index)}>x</S.TagBtn>
        </S.TagContainer>
    );
};

export default CreateTag;