import { routePath } from '@/routes/path';

export const bottomNavigationHistoryKey = 'lastBottomNavigationPath';

export const isBottomNavigationPath = (path: string) =>
  path === routePath.HOME || path === routePath.ARCHIVE;
