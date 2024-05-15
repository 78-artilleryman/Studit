import { ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import { performSearch } from '../service/Search';
import { onSnapshot } from 'firebase/firestore';
import { Postdata } from '../interface/Types';

export default function useSearch(setPostData: Dispatch<SetStateAction<Postdata[]>>, setNoMore: any, setPostDoc: any) {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = event => setSearchValue(event.target.value);
  const handleSearchReset = () => setSearchValue('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const postsQuery = performSearch(searchValue);

    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostData(data as Postdata[]);
      setPostDoc(snapshot.docs[snapshot.docs.length - 1]);
    });
    setNoMore(false);

    return () => {
      handleSearchReset();
      unsubscribe();
    };
  };

  return {
    searchValue,
    handleSearchChange,
    handleSubmit,
    handleSearchReset,
  };
}
