import { type UserRole } from '@/pages/home/types';

export const USER_ROLE_STORAGE_KEY = 'role';

const isUserRole = (role: string | null): role is UserRole =>
  role === 'parent' || role === 'child';

export const getStoredUserRole = (): UserRole => {
  const role = localStorage.getItem(USER_ROLE_STORAGE_KEY);

  return isUserRole(role) ? role : 'child';
};

export const setStoredUserRole = (role: UserRole): void => {
  localStorage.setItem(USER_ROLE_STORAGE_KEY, role);
};
