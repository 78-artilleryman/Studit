import { colors } from '@styles/colors';
import styled from 'styled-components';

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
