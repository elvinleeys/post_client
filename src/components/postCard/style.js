import styled from "styled-components";

const S = {};

S.Container = styled.div`
    margin-top: 5.5rem;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
`

S.PostTitle = styled.h1`
    font-size: 2.25rem;
    margin-bottom: 2rem;
    color: #24292e;
`

S.Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
`

S.BtnWrapper = styled.div`
    button {
        padding: 0px;
        outline: none;
        border: none;
        background: none;
        font-size: inherit;
        cursor: pointer;
        color: #868E96;
        margin-left: 0.5rem;
    }
`

S.TagListContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.875rem;
    margin-bottom: -0.875rem;
    min-height: 0.875rem;
`

S.TagListName = styled.div`
    margin-bottom: 0.875rem;
    background: #F8F9FA;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    align-items: center;
    margin-right: 0.875rem;
    color: #12B886;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
`

S.CreatedDateContainer = styled.div`
    display: flex;
    align-items: center;
    color: #868e96;
    font-size: .875rem;
`

S.PostContent = styled.p`
    margin-bottom: 2rem;
    margin-top: .5rem;
    font-size: 1rem;
    color: #495057;
`

export default S;