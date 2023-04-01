import { useEffect, useRef, useState } from 'react';

const usePreventLeave = () => {
  const listner = (e: any) => {
    e.preventDefault();
    e.returnValue = '';
  };

  const enablePrevent = () => {
    window.addEventListener('beforeunload', listner);
  };
  const disablePrevent = () => {
    window.addEventListener('beforeunload', listner);
  };

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
