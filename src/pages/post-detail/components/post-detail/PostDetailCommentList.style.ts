import styled from 'styled-components';
import { colors } from '@styles/colors';

export const CommemtList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
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

export const Comment = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
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

export const Content = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  color: ${colors.black};
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.border};
`;
