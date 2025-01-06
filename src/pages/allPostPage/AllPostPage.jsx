import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import S from './style';

const AllPostPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:8080/api/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
                console.log(posts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); // 빈 배열로 설정해 컴포넌트 마운트 시 한 번만 실행

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div>
            <S.btnWrapper>
                <Link to="/write">
                    <S.CreatePostBtn>새 글 작성하기</S.CreatePostBtn>
                </Link>
            </S.btnWrapper>
            <S.Container>
                {posts.map((post) => (
                    <Link to={`/${post.id}`} style={{ textDecoration: 'none' }}>
                        <S.PostContainer key={post.id}>
                            <S.PostTitle>{post.title}</S.PostTitle>
                            <S.PostContent>{post.content}</S.PostContent>
                            <S.TagListContainer>
                                {post.tags.map((tag, index) => (
                                    <S.TagListName key={index}>#{tag}</S.TagListName>
                                ))}
                            </S.TagListContainer>
                            <S.CreatedDateContainer>
                                <span>{format(new Date(post.createdAt), 'yyyy-MM-dd HH:mm:ss')}</span>
                            </S.CreatedDateContainer>
                        </S.PostContainer>
                    </Link>
                ))}
            </S.Container>
        </div>
    );
};

export default AllPostPage;