import React from 'react';
import S from './style';

const CreateTag = ({key, tagName, removeTag}) => {

    return (
        <S.TagContainer>
            <S.TagName>{tagName}</S.TagName>
            <S.TagBtn onClick={() => removeTag(key)}>x</S.TagBtn>
        </S.TagContainer>
    );
};

export default CreateTag;