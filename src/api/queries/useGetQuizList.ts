import getQuizList from '@api/getQuizList';
import { QUERY_KEYS } from '@constants/keys';
import { useQuery } from 'react-query';

const useGetQuizList = () => {
  const res = useQuery(QUERY_KEYS.GET_QUIZ_LIST, getQuizList);

  return res.data?.results;
};

export default useGetQuizList;
