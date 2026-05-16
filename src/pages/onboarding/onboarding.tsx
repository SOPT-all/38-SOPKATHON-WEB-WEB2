import { useCallback } from 'react';

import { IcCopy } from '@/shared/assets/icons';
import { TextButton } from '@/shared/ui';

const INVITE_LINK = 'meomoot.site';

const OnboardingPage = () => {
  const copyInviteLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(INVITE_LINK);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = INVITE_LINK;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';

      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }, []);

  const handleCopyLink = useCallback(() => {
    void copyInviteLink();
  }, [copyInviteLink]);

  return (
    <main className='bg-background flex min-h-dvh flex-col items-center px-[2.4rem] pt-[7.4rem] pb-[3.4rem]'>
      <div aria-hidden className='h-[3.1rem] w-[7.2rem]' />

      <div aria-hidden className='mt-[5.4rem] size-[20rem]' />

      <section className='mt-[1.6rem] flex flex-col items-center text-center'>
        <h1 className='typo-head-sb-24 text-neutral-800'>가족을 초대해요</h1>
        <p className='typo-body-r-14 mt-[1.6rem] whitespace-pre-line text-neutral-300'>
          {'아래 링크를 복사해서\n가족에게 보내주세요!'}
        </p>
      </section>

      <div className='mt-[3.2rem] flex h-[5.6rem] w-full max-w-[32.7rem] items-center justify-between rounded-[1.2rem] bg-white px-[2.4rem] text-left shadow-[0_0_0.4rem_0_var(--color-primary-200)]'>
        <span className='typo-body-sb-16 text-neutral-300'>{INVITE_LINK}</span>
        <button
          type='button'
          onClick={handleCopyLink}
          className='flex size-[2.4rem] items-center justify-center'
          aria-label={`${INVITE_LINK} 링크 복사하기`}
        >
          <IcCopy aria-hidden className='size-[1.8rem] text-neutral-300' />
        </button>
      </div>

      <TextButton className='mt-[14.9rem] w-full max-w-[32.7rem]' size='large'>
        시작하기
      </TextButton>

      <p className='typo-caption-r-12 mt-[1.6rem] text-neutral-200'>
        링크를 받은 가족이 들어오면 머뭇이 시작돼요
      </p>
    </main>
  );
};

export default OnboardingPage;
