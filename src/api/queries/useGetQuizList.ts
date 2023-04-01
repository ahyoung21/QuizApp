import getQuizList from '@api/getQuizList';
import { QUERY_KEYS } from '@constants/keys';
import { useQuery } from 'react-query';

const useGetQuizList = () => {
  const { isLoading, data, error, refetch } = useQuery(QUERY_KEYS.GET_QUIZ_LIST, getQuizList, {
    enabled: false,
  });

  // return res.data?.results;
  return { isLoading, data, error, refetch };
};

export default useGetQuizList;
