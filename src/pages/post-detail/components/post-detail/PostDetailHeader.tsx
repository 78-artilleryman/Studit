import React, { useContext } from 'react';
import * as S from './PostDetailHeader.style';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import AuthContext from '@pages/auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { convertTimestampToDayjs, formatDate } from '@pages/home/service/FormatDate';
import { technologiesColor } from '@styles/colors';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { toast } from 'react-toastify';
import { usePostData } from '@pages/post/context/PostDataContext';

export default function PostDetailHeader() {
  const { data } = useContext(PostDetailFetcherContext);
  const { user } = useContext(AuthContext);
  const { setPostData } = usePostData();
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  const postDelete = async () => {
    try {
      const postRef = doc(db, 'posts', data.id);
      await deleteDoc(postRef);

      toast.success('게시물이 삭제되었습니다.');
      navigate('/');
    } catch (e: any) {
      console.log(e);
      toast.error('게시물 삭제 실패');
    }
  };

  const postEdit = () => {
    setPostData(prevData => ({
      ...data,
      projectEndDate: convertTimestampToDayjs(data.projectEndDate),
      projectStartDate: convertTimestampToDayjs(data.projectStartDate),
      postDeadline: convertTimestampToDayjs(data.postDeadline),
    }));
    navigate(`/post/${data.id}/edit`);
  };

  return (
    <React.Fragment>
      <S.Back onClick={handleGoBack}>
        <img src="/images/icons/back.svg" alt="뒤로가기" />
      </S.Back>
      <S.PostDetailTitleLayout>
        <S.PostDetailTitle>{data.postTitle}</S.PostDetailTitle>
        {user?.uid === data.uid && (
          <S.PostOptionButtons>
            <button onClick={postEdit}>수정</button>
            <button onClick={postDelete}>삭제</button>
          </S.PostOptionButtons>
        )}
      </S.PostDetailTitleLayout>
      <S.StudyList>
        <S.StudyListItem>
          <S.StudyType>🗂 스터디 종류</S.StudyType>
          <S.StudyDescriptionHashTag>🧑🏽‍💻 {data.studyType}</S.StudyDescriptionHashTag>
        </S.StudyListItem>
        <S.StudyListItem>
          <S.StudyType>👨‍👨‍👦‍👦 모집인원</S.StudyType>
          <S.StudyDescription>{data.studyMember}</S.StudyDescription>
        </S.StudyListItem>
        <S.StudyListItem>
          <S.StudyType>🏠 진행방식</S.StudyType>
          <S.StudyDescription>{data.studySystem}</S.StudyDescription>
        </S.StudyListItem>
        <S.StudyListItem>
          <S.StudyType>📆 모집 마감일</S.StudyType>
          <S.StudyDescription>{formatDate(data.postDeadline)}</S.StudyDescription>
        </S.StudyListItem>
        <S.StudyListItem>
          <S.StudyType>📚 기술 스택</S.StudyType>
          <S.StudySkills>
            {data.technologys.length !== 0 &&
              data.technologys.map((skill: keyof typeof technologiesColor) => (
                <S.StudySkillItem key={skill} $background={technologiesColor[skill]}>
                  {skill}
                </S.StudySkillItem>
              ))}
          </S.StudySkills>
        </S.StudyListItem>
      </S.StudyList>
    </React.Fragment>
  );
}
