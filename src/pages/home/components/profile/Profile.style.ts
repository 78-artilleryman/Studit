import { colors } from '@styles/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Profile = styled.div`
  padding: 10px 0 0 0;
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: yellow;
`;

export const ProfileInformation = styled.div`
  margin-left: 10px;
`;

export const ProfileUsername = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
`;

export const ProfileDepartment = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: #bababa;
`;

export const ProfileCTA = styled(Link)`
  position: absolute;
  right: 20px;
  font-size: 12px;
  display: block;
  padding: 4px 10px;
  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 50px;
`;
