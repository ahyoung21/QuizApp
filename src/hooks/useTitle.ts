import { useEffect, useState } from 'react';

const useTitle = (initialState: string) => {
  const [title, setTitle] = useState<string>(initialState);

  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');

    if (htmlTitle) {
      htmlTitle.innerHTML = title;
    }
  };
  useEffect(() => {
    updateTitle();
  }, [title]);

  return { setTitle };
};

export default useTitle;
