import { IcAlertCircle } from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';

type UserRole = 'parent' | 'child';

interface OpponentAnswerCardProps {
  role: UserRole;
  hasAnswer: boolean;
}

const getOpponentLabel = (role: UserRole) =>
  role === 'child' ? '부모님' : '자녀';

const OpponentAnswerCard = ({ role, hasAnswer }: OpponentAnswerCardProps) => {
  const opponent = getOpponentLabel(role);

  return (
    <div
      className={cn(
        'flex w-full items-center justify-center gap-[0.8rem] rounded-4xl px-[1.6rem] py-16',
        hasAnswer
          ? 'border border-solid border-[#575555] bg-white'
          : 'border border-dashed border-[#C4C1C2] bg-[#F7F7F8]',
      )}
    >
      {!hasAnswer && <IcAlertCircle className='text-[#636363]' />}
      <p className='typo-body-r-16 text-center text-[#636363]'>
        {hasAnswer
          ? `${opponent}은 답변을 남겼어요`
          : `${opponent} 답변은 아직이에요`}
      </p>
    </div>
  );
};

export default OpponentAnswerCard;
