import { useCallback, useEffect, useState, ChangeEvent, useRef } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import defaultAxios from 'axios';

interface OptionsSchema {
  url: string;
}

const useAxios = (options: OptionsSchema, axiosInstance = defaultAxios) => {
  const [status, setStatus] = useState({
    data: null,
    loading: true,
    error: null,
  });
  const [trigger, setTrigger] = useState(true);

  const refetch = () => {
    setStatus({
      error: null,
      loading: true,
      data: null,
    });
    setTrigger((prev) => !prev);
  };

  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setStatus({
          ...status,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setStatus({
          ...status,
          loading: true,
          error,
        });
      });
  }, [trigger]);

  return { status, refetch };
};

export default useAxios;
