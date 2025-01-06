import React from 'react';
import S from './style';
import { useParams } from 'react-router-dom';

const Modal = ({toggleDeleteModal, handleDelete}) => {
    const { id } = useParams();

    return (
        <S.Background>
            <S.ModalContainer>
                <div>
                    <S.ModalTitle>포스트 삭제</S.ModalTitle>
                    <S.ModalMessage>정말로 삭제하시겠습니까?</S.ModalMessage>
                </div>
                <S.BtnWrapper>
                    <S.CancelBtn onClick={toggleDeleteModal}>취소</S.CancelBtn>
                    <S.CheckBtn onClick={handleDelete}>확인</S.CheckBtn>
                </S.BtnWrapper>
            </S.ModalContainer>
        </S.Background>
    );
};

export default Modal;