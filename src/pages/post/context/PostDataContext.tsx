import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
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
type InputParameter = HTMLInputElement | HTMLTextAreaElement;

export const initialPostData: PostType = {
  studyType: '',
  studyMember: '',
  studySystem: '',
  period: '',
  projectStartDate: dayjs(new Date()),
  projectEndDate: dayjs(new Date()),
  postDeadline: dayjs(new Date()),
  technologys: [],
  closed: false,
  postTitle: '',
  postSubTitle: '',
  postContent: '',
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

  const onChageTitle = useCallback(
    (id: string, text: ChangeEvent<InputParameter>) => {
      const value = text.target.value;
      setPostData(data => ({
        ...data,
        [id]: value,
      }));
    },
    [setPostData],
  );

  const onChageContent = useCallback(
    (text: string | undefined) => {
      setPostData(data => ({
        ...data,
        postContent: text,
      }));
    },
    [setPostData],
  );

  const onChagTechnologys = useCallback(
    (technology: string) => {
      setPostData(data => {
        const isAlreadyAdded = data.technologys.includes(technology);
        if (isAlreadyAdded) {
          // 기존 값이라면 제외하고 반환
          const filteredTechnologys = data.technologys.filter(item => item !== technology);
          return {
            ...data,
            technologys: filteredTechnologys,
          };
        } else {
          // 기존 값이 아니라면 추가
          return {
            ...data,
            technologys: [...data.technologys, technology],
          };
        }
      });
    },
    [setPostData],
  );

  return { postData, onChange, onChageTitle, onChageContent, onChagTechnologys, setPostData };
};

export { PostDataContextProvider, usePostData };
