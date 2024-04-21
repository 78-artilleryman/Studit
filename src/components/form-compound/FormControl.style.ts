import { colors } from '@styles/colors';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: ${colors.error};
`;

export const Label = styled.label<{ $validation: boolean }>`
  font-weight: 500;
  margin-bottom: 5px;

  ${({ $validation }) =>
    $validation &&
    `
      color: ${colors.error}
    `}
`;

export const Input = styled.input<{ $validation: boolean }>`
  width: 100%;
  border: 1px solid ${colors.border};
  border-radius: 10px;
  height: 56px;
  padding: 0 10px;

  &::placeholder {
    font-weight: 400;
    color: #7f7f7f;
  }

  &:focus {
    border: 1px solid ${colors.black};
  }

  ${({ $validation }) => $validation && ` border: 1px solid ${colors.error};`}
`;

export const ShowPasswordButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;
