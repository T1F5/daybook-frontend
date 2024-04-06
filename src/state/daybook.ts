import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

type DayBook = {
  respectBoardId: number; // 참조한 게시물
  content: string;
  category: string;
  hashtags: string[];
};

export const daybookAtom = atomWithReset<DayBook>({
  respectBoardId: 0,
  content: '',
  category: '',
  hashtags: [],
});

export const tagInputAtom = atom(false);
