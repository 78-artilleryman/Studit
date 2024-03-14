import styled from 'styled-components';

export const Post = styled.div`
  width: 305px;
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TypeTag = styled.div`
  padding: 8px 15px;
  border: none;
  font-size: 12px;
  border-radius: 50px;
  color: black;
  font-weight: 500;
  background: #d9d9d9;
  text-align: center;
  line-height: 12px;
`;

export const DeadTag = styled(TypeTag)`
  color: #ff4545;
  background: #ffbdbd;
`;

export const PostContent = styled.div`
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StudyPeriod = styled.p`
  color: #b0b0b0;
  font-size: 12px;
  font-weight: 400;
`;

export const PostTitle = styled.h2`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const PostSubTitle = styled.h3`
  color: #707070;
  font-size: 16px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  min-height: 40px;
`;

export const TechnologyImageList = styled.div`
  display: flex;
  gap: 10px;
  min-height: 35px;
`;

export const PostUser = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;

export const Name = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
