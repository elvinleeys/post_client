import styled from 'styled-components';

const S = {}

S.EditorBlock = styled.div`
    padding: 2rem 1rem 5rem;
    textarea::placeholder {
        color: gray;
        font-size: 1.2em;
        font-style: italic;
        font-weight: bold;
    }
`

S.DivisionLine = styled.div`
    background: rgb(73, 80, 87);
    height: 6px;
    width: 4rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 1px;
`

S.TitleInput = styled.input`
    width: 100%;
    padding: 0 1rem 0.5rem;
    font-size: 3rem;
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
`

S.TagContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    width: 60vw;
    height: 60px;
`

S.TagInput = styled.input`
    max-width: 820px;
    height: 2rem;
    padding-bottom: 1rem;
    font-size: 1rem;
    &:focus {
        outline: none;
    }
`

S.Content = styled.textarea`
    width: 100%;
    height: 35rem;
    resize: none;
    outline: none;
    font-size: 1rem;
    padding: 0 10px;
`

S.WriteBtnWrapper = styled.div`
    padding: 0 1rem;
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
    a {
        text-decoration: none;
    }
` 

S.CancelBtn = styled.button`
    width: 16rem;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    color: black;
    background: none;
    border-radius: 0.25rem;
    cursor: pointer;
    border: none;
    outline: none;
`

S.CheckBtn = styled.button`
    width: 16rem;
    height: 3rem;
    border-radius: 20px;
    border: none;
    background-color: #12B886;
    color: white;
    cursor: pointer;
`

export default S;