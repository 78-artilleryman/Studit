import { Dayjs } from 'dayjs';

export interface PostType {
  studyType: string; // 스터디 종류
  studyMember: string; // 모집 인원
  studySystem: string; // 진행 방식
  period: string; // 진행 기간
  projectStartDate: Dayjs; //프로젝트 시작일
  projectEndDate: Dayjs;
  postDeadline: Dayjs; // 모집 마감일
  technologys: string[]; // 기술 스택
  closed: boolean;
  // 게시물 내용
  postTitle: string;
  postSubTitle: string;
  postContent: string;
  uid: string;
  createdAt: string;
  userName: string;
}
