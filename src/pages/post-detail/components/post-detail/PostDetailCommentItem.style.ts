import styled from 'styled-components';
import { colors } from '@styles/colors';

export const Comment = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
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

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const ProfileText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.white};
`;

export const InputLayout = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  height: 150px;
  position: relative;
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

export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.black};
`;

export const Date = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${colors.placeholder};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.border};
`;

export const ContentText = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: ${colors.black};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.placeholder};

  & > button:last-child {
    color: ${colors.error};
  }
`;

export const UpdateButtons = styled.div`
  position: absolute;
  right: 0;
  bottom: -20px;
  color: ${colors.black};

  & > button {
    padding: 10px;
    background-color: ${colors.black};
    color: ${colors.white};
    border-radius: 10px;
  }

  & > button:last-child {
    color: ${colors.white};
    margin-left: 10px;
    background-color: ${colors.error};
  }
`;
