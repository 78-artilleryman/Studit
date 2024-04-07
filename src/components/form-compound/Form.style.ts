import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 414px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputLayout = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 20px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  margin: 10px 0 30px 0;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;
