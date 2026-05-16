import ChatContainer from './components/chat-container';

type UserRole = 'parent' | 'child';

const AnswerPage = () => {
  const role = (localStorage.getItem('role') ?? 'child') as UserRole;

  return (
    <div className='flex flex-col gap-[1.6rem] px-[2rem] py-[2rem]'>
      {/* 답변 전 예시 */}
      <ChatContainer role={role} opponentHasAnswer={false} />
    </div>
  );
};

export default AnswerPage;
