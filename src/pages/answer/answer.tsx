import { useNavigate } from 'react-router-dom';

import { routePath } from '@/routes/path';
import { completeAnswer } from '@/shared/hooks';

import ChatContainer from './components/chat-container';

type UserRole = 'parent' | 'child';

const getStoredRole = (): UserRole => {
  const role = localStorage.getItem('role');

  return role === 'parent' || role === 'child' ? role : 'parent';
};

const AnswerPage = () => {
  const navigate = useNavigate();
  const role = getStoredRole();

  const handleCompleteAnswer = () => {
    completeAnswer();
    void navigate(routePath.HOME);
  };

  return (
    <div className='flex flex-col gap-[1.6rem] px-[2rem] py-[2rem]'>
      <ChatContainer
        role={role}
        opponentHasAnswer={false}
        onCompleteAnswer={handleCompleteAnswer}
      />
    </div>
  );
};

export default AnswerPage;
