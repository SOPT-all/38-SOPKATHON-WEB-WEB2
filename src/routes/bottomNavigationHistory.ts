import { routePath } from './path';

export const bottomNavigationHistoryKey = 'lastBottomNavigationPath';

export const isBottomNavigationPath = (path: string) =>
  path === routePath.HOME || path === routePath.ARCHIVE;
