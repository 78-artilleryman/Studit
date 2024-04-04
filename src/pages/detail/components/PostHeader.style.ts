import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Title = styled.h2`
  margin: 10px 0 20px 0;
  font-size: 40px;
`;

export const UserName = styled.div``;

export const Date = styled.div``;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  padding-bottom: 20px;
  border-bottom: 1px dashed ${colors.border};

  ${UserName} {
    margin-left: 10px;
  }

  ${Date} {
    margin-left: 10px;
  }
`;

export const UserImage = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
`;
