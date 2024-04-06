import { DayBook } from '@state/daybook';
import client from './client';
import { PostDaybookResponse } from './response';

export const postDaybook = async (rawData: DayBook) => {
  const { data } = await client.post<PostDaybookResponse>('/borad', {
    rawData,
  });
  return data;
};
