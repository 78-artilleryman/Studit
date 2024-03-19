import styled from 'styled-components';

export const Post = styled.div`
  width: 305px;
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition-duration: 0.2s;
  transition-property: transform;
  position: relative;

  &:hover {
    transform: scale(1.05);
    border: 1px solid #000000;
  }
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  opacity: 0.5;
  top: 0;
  left: 0;
`;

export const PostClosed = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #fb4e4e;
  color: #fff;
  border-radius: 10px;
  top: 40%;
  left: 30%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 10;
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
  min-height: 50px;
  margin-bottom: 10px;
`;

export const TechnologyImageList = styled.div`
  display: flex;
  gap: 10px;
  min-height: 35px;
`;

export const TechImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
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
