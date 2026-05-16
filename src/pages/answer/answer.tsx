import { QuestionBox } from '@/shared/ui';

import ChatContainer from './components/chat-container';

type UserRole = 'parent' | 'child';

const AnswerPage = () => {
  const role = (localStorage.getItem('role') ?? 'child') as UserRole;

  return (
    <div className='flex flex-col items-center gap-[2.4rem]'>
      <div className='w-[32.7rem] pt-[2.4rem]'>
        <QuestionBox
          variant='today'
          question='엄마가 좋아하는 음식이 뭐야?'
          date={new Date()}
          imageSrc=''
          imageAlt='오늘의 질문 이미지'
        />
      </div>
      <div className='w-[32.7rem] pb-[13.4rem]'>
        <ChatContainer role={role} opponentHasAnswer={false} />
      </div>
    </div>
  );
};

export default AnswerPage;
