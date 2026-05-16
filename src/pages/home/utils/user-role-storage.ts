import { type UserRole } from '@/pages/home/types';

const ROLE_KEY = 'role';

const isUserRole = (role: string | null): role is UserRole =>
  role === 'parent' || role === 'child';

export const assertUserRole = (role: string): UserRole => {
  if (!isUserRole(role)) {
    throw new Error(`${role}은 올바른 role 값이 아닙니다`);
  }

  return role;
};

export const getStoredUserRole = (): UserRole => {
  const role = localStorage.getItem(ROLE_KEY);

  return isUserRole(role) ? role : 'child';
};

export const setStoredUserRole = (role: UserRole): void => {
  localStorage.setItem(ROLE_KEY, role);
};
