import { type ServerUserRole, type UserRole } from '@/pages/home/types';

export const serverRoleToUserRole = (role: ServerUserRole): UserRole =>
  role === 'CHILD' ? 'child' : 'parent';
