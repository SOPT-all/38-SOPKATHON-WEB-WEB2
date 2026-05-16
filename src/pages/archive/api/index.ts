import { publicInstance } from '@/shared/api/axios';

export interface RecordItem {
  id: number;
  question: string;
  date: string;
}

interface ServerRecord {
  roomQuestionId: number;
  question: string;
  completedAt: string;
}

interface RecordsResponse {
  success: boolean;
  data: { records: ServerRecord[] };
  error: { code: number; message: string } | null;
}

const BROWSER_TOKEN_KEY = 'browserToken';

const getBrowserToken = (): string => {
  const token = localStorage.getItem(BROWSER_TOKEN_KEY);
  if (!token) throw new Error('browserToken이 localStorage에 없습니다');
  return token;
};

const formatDate = (iso: string): string => {
  const d = new Date(iso);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export const getRecords = async (): Promise<RecordItem[]> => {
  const token = getBrowserToken();
  const { data } = await publicInstance.get<RecordsResponse>('/api/records', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data.records.map((r) => ({
    id: r.roomQuestionId,
    question: r.question,
    date: formatDate(r.completedAt),
  }));
};
