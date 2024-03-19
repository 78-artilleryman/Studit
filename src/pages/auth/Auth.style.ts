import { colors } from '@styles/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-weight: 500;
  margin: 10px 0 30px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 414px;
  margin-left: auto;
  margin-right: auto;
`;

export const AuthToLink = styled(Link)`
  display: block;
  text-align: start;
  font-size: 14px;
`;

export const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const SocialLayout = styled.div`
  display: flex;
  gap: 0 10px;
`;

export const SocialItem = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid ${colors.border};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: ${colors.error};
`;
