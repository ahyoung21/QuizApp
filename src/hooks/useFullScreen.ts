import { useCallback, useEffect, useState, ChangeEvent, useRef } from 'react';

const useFullScreen = (callback: (check: boolean) => void) => {
  const element = useRef<HTMLDivElement>(null);
  const makeFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      callback(true);
    }
  };

  const exitFullScreen = () => {
    callback(false);

    document.exitFullscreen();
  };
  return { element, makeFullScreen, exitFullScreen };
};

export default useFullScreen;
