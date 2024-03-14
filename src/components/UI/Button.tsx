import React, { ReactNode } from 'react';
import * as S from '@Components/UI/Button.style';

interface ButtonStyle {
  $width?: number;
  $height?: number;
}

interface ButtonProps {
  type?: 'button' | 'submit';
  children: ReactNode;
  handleClickEvent?: () => {};
}

function Button({
  type = 'button',
  $width,
  $height,
  children,
  handleClickEvent,
}: ButtonProps & ButtonStyle) {
  return (
    <S.Button
      type={type}
      $width={$width}
      $height={$height}
      onClick={handleClickEvent}
    >
      {children}
    </S.Button>
  );
}

export default Button;
