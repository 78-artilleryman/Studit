import styled from 'styled-components';
import { colors } from '@styles/colors';

export const CommentInput = styled.div`
  margin-bottom: 100px;
`;

export const commentTitle = styled.h3`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 500;
`;

export const Profile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #7aba78;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  position: relative;
  height: 150px;
  margin-top: 20px;
`;

export const ProfileText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.white};
`;

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 80px;
  padding: 10px 10px 50px 10px;
  border: 1px solid ${colors.border};
  border-radius: 10px;
  font-size: 14px;

  &::placeholder {
    color: ${colors.placeholder};
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.black};
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
`;
