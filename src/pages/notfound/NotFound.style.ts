import { colors } from '@styles/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  font-weight: 500;
  position: relative;
  width: 100vw;
  height: calc(100vh - 76px);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DescriptionWrapper = styled.div`
  width: calc(50% - 10px);
`;

export const Description = styled.p`
  font-size: 24px;
  color: #1e1e1e;
  line-height: 1.5;

  strong {
    font-weight: 700;
  }
`;

export const LinkTo = styled(Link)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  width: 150px;
  height: 56px;
  color: ${colors.white};
  background-color: #1e1e1e;
  border-radius: 10px;
`;

export const ImageContent = styled.div`
  text-align: center;
  font-size: 10vw;
`;
