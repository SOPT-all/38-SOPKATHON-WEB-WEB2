import { type HomeSession, type UserRole } from '@/pages/home/types';
import {
  getStoredUserRole,
  USER_ROLE_STORAGE_KEY,
} from '@/pages/home/utils/user-role-storage';

const ROOM_ID_KEY = 'roomId';
const PARTICIPANT_ID_KEY = 'participantId';
const BROWSER_TOKEN_KEY = 'browserToken';

interface SetHomeSessionParams {
  browserToken: string;
  participantId: number;
  roomId: number;
  userRole: UserRole;
}

const getRequiredStorageValue = (key: string): string => {
  const value = localStorage.getItem(key);

  if (!value) {
    throw new Error(`${key}가 localStorage에 없습니다`);
  }

  return value;
};

const getRequiredNumberStorageValue = (key: string): number => {
  const value = Number(getRequiredStorageValue(key));

  if (!Number.isFinite(value)) {
    throw new Error(`${key}가 올바른 숫자 값이 아닙니다`);
  }

  return value;
};

export const getHomeSession = (): HomeSession => ({
  browserToken: getRequiredStorageValue(BROWSER_TOKEN_KEY),
  participantId: getRequiredNumberStorageValue(PARTICIPANT_ID_KEY),
  roomId: getRequiredNumberStorageValue(ROOM_ID_KEY),
  userRole: getStoredUserRole(),
});

export const getStoredBrowserToken = (): string =>
  getRequiredStorageValue(BROWSER_TOKEN_KEY);

export const getOptionalStoredBrowserToken = (): string | null =>
  localStorage.getItem(BROWSER_TOKEN_KEY);

export const setHomeSession = ({
  browserToken,
  participantId,
  roomId,
  userRole,
}: SetHomeSessionParams): void => {
  localStorage.setItem(BROWSER_TOKEN_KEY, browserToken);
  localStorage.setItem(PARTICIPANT_ID_KEY, String(participantId));
  localStorage.setItem(ROOM_ID_KEY, String(roomId));
  localStorage.setItem(USER_ROLE_STORAGE_KEY, userRole);
};
