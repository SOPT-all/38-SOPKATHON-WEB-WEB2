import BackButton from '@/shared/ui/BackButton';

const AnswerDetailPage = () => {
  return (
    <main className='bg-background min-h-dvh'>
      <header className='flex items-center px-[2rem] pt-[1.6rem] pb-[1.2rem]'>
        <BackButton delta={-1} />
      </header>

      <section>
        <h1>답변 상세보기</h1>
        {/* 질문 표시 */}
        {/* 답변 동영상 재생 */}
        {/* 답변 정보 (날짜, 작성자 등) */}
      </section>
    </main>
  );
};

export default AnswerDetailPage;
