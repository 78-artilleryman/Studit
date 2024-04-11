import React from 'react';
import * as S from './Skeleton.style';

function Skeleton() {
  return (
    <S.SkeletonContainer>
      <S.SkeletonSpan $width="60" $height="20" />
      <S.SkeletonSpan $width="140" $height="15" />
      <S.SkeletonSpan $width="200" $height="20" />
      <S.SkeletonSpanLayout>
        <S.SkeletonSpan $width="250" $height="10" />
        <S.SkeletonSpan $width="250" $height="10" />
        <S.SkeletonSpan $width="250" $height="10" />
      </S.SkeletonSpanLayout>
      <S.SkeletonCircleLayout>
        <S.SkeletonCircle $width="30" $height="30" />
        <S.SkeletonCircle $width="30" $height="30" />
        <S.SkeletonCircle $width="30" $height="30" />
        <S.SkeletonCircle $width="30" $height="30" />
      </S.SkeletonCircleLayout>
      <hr color="#c0c0c0"></hr>
      <S.SkeletonCircleLayout>
        <S.SkeletonCircle $width="35" $height="35" />
        <S.SkeletonSpan $width="150" $height="15" />
      </S.SkeletonCircleLayout>
    </S.SkeletonContainer>
  );
}

export default Skeleton;
