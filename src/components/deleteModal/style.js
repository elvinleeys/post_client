import styled from "styled-components";

const S = {};

S.Background = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
`

S.ModalContainer = styled.div`
    width: 25rem;
    border-radius: 4px;
    background: #FFFFFF;
    padding: 2rem 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0px;
`

S.ModalTitle = styled.h3`
    margin: 0px;
    font-size: 1.5rem;
    color: #212529;
    line-height: 1.5;
    font-weight: bold;
`

S.ModalMessage = styled.div`
    line-height: 1.5;
    font-size: 1rem;
    color: #495057;
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
`

S.BtnWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
`

S.CancelBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    color: #12B886;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2rem;
    font-size: 1rem;
`

S.CheckBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background: #12B886;
    color: #FFFFFF;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2rem;
    font-size: 1rem;
`

export default S;