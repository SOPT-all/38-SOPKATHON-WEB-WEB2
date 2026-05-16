import { useEffect, useState } from 'react';

import { IcCheck } from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';

interface StepBoxProps {
  currentStep?: 1 | 2 | 3 | 4;
  title?: string;
}

const steps = [1, 2, 3, 4] as const;
const progressWidthByStep = {
  1: '0%',
  2: '33.3333%',
  3: '66.6667%',
  4: '100%',
} as const;
const activeAnimationDelayMs = 180;

const StepBox = ({
  currentStep = 1,
  title = '아직은 머뭇거리는 중이에요!',
}: StepBoxProps) => {
  const [activeStep, setActiveStep] = useState(currentStep);

  useEffect(() => {
    if (currentStep === activeStep) {
      return;
    }

    const delay = currentStep < activeStep ? 0 : activeAnimationDelayMs;
    const timerId = window.setTimeout(() => {
      setActiveStep(currentStep);
    }, delay);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [activeStep, currentStep]);

  return (
    <section className='flex w-[32.7rem] flex-col gap-[1.2rem] overflow-hidden rounded-[1.6rem] bg-white p-[1.6rem]'>
      <h2 className='typo-body-sb-16 w-full text-neutral-900'>{title}</h2>

      <div className='grid w-full grid-cols-4 grid-rows-[2.4rem_1.8rem] items-start'>
        <div className='relative col-span-4 col-start-1 row-start-1 mx-[1.05rem] flex items-center justify-between'>
          <div className='absolute top-1/2 left-1/2 h-[1rem] w-[26.8rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-50' />
          <div
            className='bg-primary-500 absolute top-1/2 left-0 h-[1rem] -translate-y-1/2 rounded-full transition-[width] duration-250 ease-out'
            style={{ width: progressWidthByStep[currentStep] }}
          />

          {steps.map((step) => {
            const isActive = step <= activeStep;

            return (
              <div
                key={step}
                className={cn(
                  'relative z-10 flex size-[2.4rem] items-center justify-center rounded-full border border-white transition-[background-color,box-shadow] duration-50 ease-out',
                  isActive
                    ? 'bg-primary-500 shadow-[0_0_1rem_rgba(255,104,182,0.36)]'
                    : 'bg-neutral-50',
                )}
              >
                {isActive && (
                  <IcCheck
                    className='size-[1.6rem] text-white'
                    aria-hidden='true'
                  />
                )}
              </div>
            );
          })}
        </div>

        {steps.map((step) => {
          const isActive = step <= activeStep;

          return (
            <span
              key={step}
              className={cn(
                'row-start-2 w-full text-center transition-colors duration-150 ease-out',
                isActive ? 'typo-caption-sb-12' : 'typo-caption-r-12',
                isActive ? 'text-primary-500' : 'text-neutral-100',
              )}
            >
              STEP0{step}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default StepBox;
