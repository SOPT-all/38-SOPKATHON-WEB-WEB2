import { createBrowserRouter } from 'react-router-dom';

import AnswerPage from '@/pages/answer/answer';
import AnswerDetailPage from '@/pages/answer-detail/answer-detail';
import ArchivePage from '@/pages/archive/archive';
import HomePage from '@/pages/home/home';

import Layout from './layout';
import { routePath } from './path';

export const router = createBrowserRouter([
  {
    path: routePath.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routePath.ARCHIVE, element: <ArchivePage /> },
    ],
  },
  {
    path: routePath.ANSWER,
    element: <AnswerPage />,
  },
  {
    path: routePath.ANSWER_DETAIL,
    element: <AnswerDetailPage />,
  },
]);
