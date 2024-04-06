import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export type DayBook = {
  respectBoardId: number | null; // 참조한 게시물
  content: string;
  category: string;
  hashtags: string[];
};

export const daybookAtom = atomWithReset<DayBook>({
  respectBoardId: null,
  content: '',
  category: '',
  hashtags: [],
});

export const tagInputAtom = atom(false);
