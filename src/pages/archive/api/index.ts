export interface RecordItem {
  id: number;
  question: string;
  date: string;
}

// TODO: 서버 endpoint 확정되면 axios 호출로 교체
export const getRecords = async (): Promise<RecordItem[]> => {
  return Promise.resolve([]);
};
