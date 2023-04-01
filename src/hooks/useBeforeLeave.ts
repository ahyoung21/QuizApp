import { useEffect, useRef, useState } from 'react';

const useBeforeLeave = (onLeave: () => void) => {
  if (typeof onLeave !== 'function') return;

  const handle = (e: any) => {
    const { clientY } = e;
    if (clientY < 0) onLeave();
  };

  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};

export default useBeforeLeave;
