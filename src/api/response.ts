export type PostDaybookResponse = {
  boardId: number;
  content: string;
  authorId: number;
  category: string;
  hearts: number;
  respectBoardId: number;
  hashtags: string;
};

export type GetDaybookResponse = {
  boardId: number;
  content: string;
  respectBoardId: number | null;
  authoreId: number;
  category: string;
  hearts: number;
  hashtags: string[];
  paperType: string;
};
