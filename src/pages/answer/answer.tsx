import {
  bottomNavigationHistoryKey,
  isBottomNavigationPath,
} from '@/routes/bottomNavigationHistory';
import { routePath } from '@/routes/path';
import BackButton from '@/shared/ui/BackButton';

const AnswerPage = () => {
  const lastBottomNavigationPath = sessionStorage.getItem(
    bottomNavigationHistoryKey,
  );
  const backPath =
    lastBottomNavigationPath && isBottomNavigationPath(lastBottomNavigationPath)
      ? lastBottomNavigationPath
      : routePath.HOME;

  return (
    <main className='min-h-dvh bg-background'>
      <header className='flex items-center px-[2rem] pt-[1.6rem] pb-[1.2rem]'>
        <BackButton to={backPath} />
      </header>

      <section>
        <h1>답변하기</h1>
        {/* 질문 표시 */}
        {/* 동영상 녹화/업로드 */}
        {/* 답변 제출 */}
      </section>
    </main>
  );
};

export default AnswerPage;
