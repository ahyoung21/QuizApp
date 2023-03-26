import { useCallback, useEffect, useState } from 'react';

const useObserver = (intersectCallback: () => void) => {
  const [target, setTarget] = useState<Element | null>(null);

  const onIntersect = useCallback(async ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting !== undefined) {
      intersectCallback();
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect);
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target, onIntersect]);

  return { target: setTarget };
};

export default useObserver;
