import React, { useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import CreateTag from '../../components/createTag/CreateTag';

const WritePage = () => {
    const [tags, setTags] = useState(["javascript", "react"]);
    const [tag, setTag] = useState("");

    const removeTag = (i) => {
      const clonetags = tags.slice();
      clonetags.splice(i, 1);
      setTags(clonetags);
    };

    const addTag = (e) => {
      setTag(e.target.value);
    };

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleClick();
      }
    };

    const handleClick = () => {
      setTags([...tags, tag]);
      setTag("");
    };

    return (
        <S.EditorBlock>
            <S.TitleInput type="text" placeholder='제목을 입력하세요' />
            <S.DivisionLine></S.DivisionLine>
            <S.TagContainer>
                {tags.map((tagName, i) => (
                    <CreateTag key={i} tagName={tagName} removeTag={removeTag}/>
                ))}
                <S.TagInput 
                    type='text' 
                    placeholder='Press enter to add tags'
                    onChange={(e) => addTag(e)}
                    onKeyDown={(e) => handleKeyPress(e)}
                    value={tag}
                />
            </S.TagContainer>
            <S.Content placeholder='내용을 입력하세요'/>
            <S.WriteBtnWrapper>
                <Link to="/">
                    <S.CancelBtn>← 나가기</S.CancelBtn>
                </Link>
                <S.CheckBtn>등록</S.CheckBtn>
            </S.WriteBtnWrapper>
        </S.EditorBlock>
    );
};

export default WritePage;