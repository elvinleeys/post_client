import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';  // URL 파라미터를 사용하기 위한 hook
import S from './style';
import { format } from 'date-fns';
import Modal from '../deleteModal/Modal';
import { toast } from 'react-toastify';

const PostCard = () => {
    const { id } = useParams();  // URL에서 게시글 ID를 가져옴
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false); 
    const navigate = useNavigate();  // 페이지 이동을 위한 훅

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8080/api/posts/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);  // `id`가 변경될 때마다 데이터를 다시 불러옴

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    const handleEdit = () => {
        // 수정 페이지로 이동, post의 데이터 전달
        navigate(`/write`, { state: { post } });
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                toast.success("게시글이 삭제되었습니다!");
                navigate('/');
            } else {
                throw new Error("삭제 실패");
            }
        } catch (error) {
            setError(error.message);
            toast.error("삭제에 실패하였습니다."); 
        }
    };


    const toggleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    return (
        <S.Container>
            <S.PostTitle>{post.title}</S.PostTitle>
            <S.Wrapper>
                <S.CreatedDateContainer>
                    <span>{format(new Date(post.createdAt), 'yyyy-MM-dd HH:mm:ss')}</span>
                </S.CreatedDateContainer>
                <S.BtnWrapper>
                    <button onClick={handleEdit}>수정</button>
                    <button onClick={toggleDeleteModal}>삭제</button>
                </S.BtnWrapper>
            </S.Wrapper>
            <S.TagListContainer>
                {post.tags.map((tag, index) => (
                    <S.TagListName key={index}>#{tag}</S.TagListName>
                ))}
            </S.TagListContainer>
            <S.PostContent>{post.content}</S.PostContent>
            {showDeleteModal && <Modal toggleDeleteModal={toggleDeleteModal} handleDelete={handleDelete}/>}
        </S.Container>
    );
};

export default PostCard;