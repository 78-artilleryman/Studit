import { colors } from '@styles/colors';
import styled, { css } from 'styled-components';

export const ErrorColorStyle = css<{ $validation: boolean }>`
  ${({ $validation }) =>
    $validation &&
    `
    color: ${colors.error}
  `}
`;

export const ErrorBorderStyle = css<{ $validation: boolean }>`
  ${({ $validation }) =>
    $validation &&
    `
    border: 1px solid ${colors.error};
  `}
`;

export const Label = styled.label<{ $validation: boolean }>`
  font-weight: 500;
  margin-bottom: 5px;
  ${ErrorColorStyle}
`;

export const InputElement = styled.input<{ $validation: boolean }>`
  border: 1px solid ${colors.border};
  border-radius: 10px;
  height: 56px;
  padding: 0 10px;

  &::placeholder {
    font-weight: 400;
    color: #7f7f7f;
  }

  ${ErrorBorderStyle}
`;
