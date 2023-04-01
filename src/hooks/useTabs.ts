import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from '../../store/store';

export interface tabType {
  tab: string;
  content: string;
}

export type UserInputProps = [string, (e: ChangeEvent) => void];

const useTabs = (initialTab: Number, allTabs: tabType[]) => {
  const [currentIndex, setCurrentIndex] = useState<Number>(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default useTabs;
