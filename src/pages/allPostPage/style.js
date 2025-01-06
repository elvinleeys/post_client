import styled from 'styled-components'

const S = {}

S.Container = styled.div`
    padding-top: 90px;
    width: 768px;
    padding-bottom: 64px;
    margin: 0 auto;
`

S.btnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    a {
        text-decoration: none;
    }
    button:hover {
        background-color: #212529;
        color: white;
    }
`

S.CreatePostBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    border-radius: 20px;
    font-weight: bold;
    border: 1px solid #212529;
    background-color: white;
    transition: 0.125s ease-in;
    cursor: pointer;
`

S.PostContainer = styled.div`
    border-top: 1px solid #f1f3f5;
    padding-top: 64px;
    padding-bottom: 64px;
    margin-bottom: 24px;
`

S.PostTitle = styled.h2`
    font-size: 1.5rem;
    margin: revert;
    color: #24292e;
`

S.PostContent = styled.p`
    margin-bottom: 2rem;
    margin-top: .5rem;
    font-size: 1rem;
    color: #495057;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

S.TagListContainer = styled.div`
    display: flex;
    align-items: center;
`

S.TagListName = styled.div`
    margin-bottom: 14px;
    background: #f8f9fa;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    margin-right: 14px;
    color: #12b886;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
`

S.CreatedDateContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: #868e96;
    font-size: .875rem;
`

export default S;