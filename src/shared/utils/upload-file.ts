import { publicInstance } from '@/shared/api/axios';

interface PresignedUrlResponse {
  success: boolean;
  data: { uploadUrl: string; key: string };
  error: { code: number; message: string } | null;
}

// localStorage 키 이름이 다르면 수정
const BROWSER_TOKEN_KEY = 'browserToken';

const getBrowserToken = (): string => {
  const token = localStorage.getItem(BROWSER_TOKEN_KEY);
  if (!token) throw new Error('browserToken이 localStorage에 없습니다');
  return token;
};

const requestPresignedUrl = async (fileName: string, contentType: string) => {
  const token = getBrowserToken();
  const { data } = await publicInstance.post<PresignedUrlResponse>(
    '/api/uploads/presigned-url',
    { fileName, contentType },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data.data;
};

const putToPresignedUrl = async (
  uploadUrl: string,
  file: File,
  contentType: string,
) => {
  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    body: file,
  });
  if (!response.ok) throw new Error('파일 업로드 실패');
};

export const uploadFile = async (file: File): Promise<string> => {
  const { uploadUrl, key } = await requestPresignedUrl(file.name, file.type);
  await putToPresignedUrl(uploadUrl, file, file.type);
  return key;
};
