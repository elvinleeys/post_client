import React, { useEffect, useState } from 'react';
import S from './style';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import CreateTag from '../../components/createTag/CreateTag';

const WritePage = () => {
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.post) {
            // 수정 모드
            const post = location.state.post;
            setTags(post.tags);
            setTitle(post.title);
            setContent(post.content);
            setIsEditMode(true);
        }
    }, [location]);


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

    const handleSubmit = async () => {
      if (!title || !content) {
          alert("제목과 내용을 입력하세요.");
          return;
      }

      const postData = {
          title: title,
          content: content,
          tags: tags
      };

      try {
        let response;
        if (isEditMode) {
              // 수정 시 PUT 요청
              response = await fetch(`http://localhost:8080/api/posts/${location.state.post.id}`, {
                  method: 'PUT',
                  body: JSON.stringify(postData),
                  headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                  },
              });
          } else {
              // 새 글 작성 시 POST 요청
              response = await fetch('http://localhost:8080/api/posts', {
                  method: 'POST',
                  body: JSON.stringify(postData),
                  headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                  },
              });
          }

          if (response.ok) {
              const data = await response.json();
              toast.success(isEditMode ? "게시글 수정이 완료되었습니다!" : "게시글 등록이 완료되었습니다!");
              setTimeout(() => {
                  navigate("/");
              }, 2000);
          } else {
              throw new Error("데이터 통신 실패");
          }
      } catch (error) {
          toast.error("데이터 통신에 실패하였습니다.");
      }
    };

    return (
        <S.EditorBlock>
            <ToastContainer position="top-right" autoClose={2000} />
            <S.TitleInput 
                type="text" 
                placeholder='제목을 입력하세요'
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
            />
            <S.DivisionLine></S.DivisionLine>
            <S.TagContainer>
                {tags.map((tagName, i) => (
                    <CreateTag key={i} index={i} tagName={tagName} removeTag={removeTag}/>
                ))}
                <S.TagInput 
                    type='text' 
                    placeholder='Press enter to add tags'
                    onChange={(e) => addTag(e)}
                    onKeyDown={(e) => handleKeyPress(e)}
                    value={tag}
                />
            </S.TagContainer>
            <S.Content 
                placeholder='내용을 입력하세요'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <S.WriteBtnWrapper>
                <Link to="/">
                    <S.CancelBtn>← 나가기</S.CancelBtn>
                </Link>
                <S.CheckBtn onClick={handleSubmit}>{isEditMode ? '수정' : '등록'}</S.CheckBtn>
            </S.WriteBtnWrapper>
        </S.EditorBlock>
    );
};

export default WritePage;