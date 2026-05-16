import { createBrowserRouter } from 'react-router-dom';

import AnswerPage from '@/pages/answer/answer';
import AnswerDetailPage from '@/pages/answer-detail/answer-detail';
import ArchivePage from '@/pages/archive/archive';
import HomePage from '@/pages/home/home';
import AnswerLayout from '@/routes/answerLayout';
import Layout from '@/routes/layout';
import { routePath } from '@/routes/path';

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
    element: <AnswerLayout />,
    children: [
      { path: routePath.ANSWER, element: <AnswerPage /> },
      { path: routePath.ANSWER_DETAIL, element: <AnswerDetailPage /> },
    ],
  },
]);
