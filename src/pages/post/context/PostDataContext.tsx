import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from 'react';
import { PostType } from '../interface/PostType';
import dayjs, { Dayjs } from 'dayjs';

interface Props {
  children: ReactNode;
}

interface PostDataContextValue {
  postData: PostType;
  setPostData: Dispatch<SetStateAction<PostType>>;
}

type Parameter = Dayjs | null | string;

const initialPostData: PostType = {
  studyType: '',
  studyMember: '',
  studySystem: '',
  period: '',
  projectStartDate: dayjs(new Date()),
  projectEndDate: dayjs(new Date()),
  postDeadline: dayjs(new Date()),
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
    (id: string, selected: Parameter) => {
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
