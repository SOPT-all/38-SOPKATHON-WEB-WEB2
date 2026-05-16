import {
  HomeCardDivider,
  HomeHeader,
  HomeQuestionCard,
} from '@/pages/home/components';
import { characterMain, characterSad } from '@/shared/assets/images';
import { useAnswerProgress } from '@/shared/hooks';
import StepBox from '@/shared/ui/StepBox';

const HomePage = () => {
  const { bubbleText, currentStep, hasAnsweredToday, title } =
    useAnswerProgress();
  const characterImage = currentStep >= 3 ? characterMain : characterSad;

  return (
    <>
      <HomeHeader />

      <div className='flex min-h-[calc(100dvh-5.6rem-8.3rem)] flex-col items-center bg-background pt-[2.5rem]'>
        <section className='flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <div className='typo-body-sb-16 rounded-[1.2rem] bg-primary-300 px-[1.8rem] py-[0.8rem] text-white'>
              {bubbleText}
            </div>
            <div className='h-0 w-0 border-x-[0.8rem] border-t-[0.8rem] border-x-transparent border-t-primary-300' />
          </div>

          <img
            src={characterImage}
            alt=''
            aria-hidden='true'
            className='mt-[0.4rem] size-[29.5rem] object-contain'
          />
        </section>

        <section className='mt-[-9.1rem] flex w-[32.7rem] flex-col'>
          <StepBox currentStep={currentStep} title={title} />
          <HomeCardDivider />
          <HomeQuestionCard hasAnsweredToday={hasAnsweredToday} />
        </section>
      </div>
    </>
  );
};

export default HomePage;
