import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from 'react';
import { PostType } from '../interface/PostType';

interface Props {
  children: ReactNode;
}

interface PostDataContextValue {
  postData: PostType;
  setPostData: Dispatch<SetStateAction<PostType>>;
}

const initialPostData: PostType = {
  studyType: '',
  studyMember: '',
  studySystem: '',
  period: '',
  projectStartDate: '',
  projectEndDate: '',
  postDeadline: '',
  technologys: [''],
  closed: false,
  postTitle: '',
  postSubTitle: '',
  postContent: '',
  uid: 'test',
  createdAt: '',
  userName: '윤병현',
};

const PostDataContext = createContext<PostDataContextValue>({
  postData: initialPostData,
  setPostData: () => {},
});

const PostDataContextProvider = ({ children }: Props) => {
  const [postData, setPostData] = useState<PostType>(initialPostData);
  console.log(postData);
  return <PostDataContext.Provider value={{ postData, setPostData }}>{children}</PostDataContext.Provider>;
};

const usePostData = () => {
  const context = useContext(PostDataContext);
  const { postData, setPostData } = context;

  const onChange = useCallback(
    (id: string, selected: string) => {
      setPostData(data => ({
        ...data,
        [id]: selected,
      }));
    },
    [setPostData],
  );

  return { postData, onChange };
};

export { PostDataContextProvider, usePostData };
