import { IcCamera } from '@/shared/assets/icons';
import TextButton from '@/shared/ui/text-button/TextButton';

const MyAnswerCard = () => {
  return (
    <div className='flex w-full flex-col items-center gap-[2.4rem] rounded-4xl border border-dashed border-[#FF68B6] bg-[#FFF0F8] px-[1.6rem] py-16'>
      <>
        <p className='typo-body-r-16 text-center text-neutral-300'>
          지금 영상으로 답변을
          <br />
          남겨주세요!
        </p>
        <TextButton size='small' rightIcon={<IcCamera />} onClick={() => {}}>
          나의 답변 남기기
        </TextButton>
      </>
    </div>
  );
};

export default MyAnswerCard;
