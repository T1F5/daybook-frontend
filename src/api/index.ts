import { DayBook } from '@state/daybook';
import client from './client';
import { GetDaybookResponse, PostDaybookResponse } from './response';

interface Response<T> {
  status: number;
  data: T;
  timestamp: Date;
}

export const postDaybook = async (rawData: DayBook) => {
  const { data } = await client.post<Response<PostDaybookResponse>>('/board', {
    ...rawData,
  });
  return data;
};

export const getDaybook = async () => {
  const { data } = await client.get<Response<GetDaybookResponse>>('/board');
  return data;
};
