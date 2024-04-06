import React, { ReactNode } from 'react';
import * as S from '@components/UI/Button.style';

interface ButtonStyle {
  $width?: number;
  $height?: number;
}

interface ButtonProps {
  type?: 'button' | 'submit';
  children: ReactNode;
  disabled?: boolean;
  handleClickEvent?: () => {};
}

function Button({ type = 'button', $width, $height, children, disabled, handleClickEvent }: ButtonProps & ButtonStyle) {
  return (
    <S.Button type={type} $width={$width} $height={$height} onClick={handleClickEvent} disabled={disabled}>
      {children}
    </S.Button>
  );
}

export default Button;
