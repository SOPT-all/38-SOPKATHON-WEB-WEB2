import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  getOptionalStoredBrowserToken,
  setHomeSession,
} from '@/pages/home/utils/home-session';
import { serverRoleToUserRole } from '@/pages/home/utils/role';
import { createRoom } from '@/pages/onboarding/api';
import { routePath } from '@/routes/path';
import { IcCopy } from '@/shared/assets/icons';
import { characterMain, imgLogo } from '@/shared/assets/images';
import { TextButton } from '@/shared/ui';

const INVITE_LINK = 'meomoot.site';

const OnboardingPage = () => {
  const [inviteLink, setInviteLink] = useState(INVITE_LINK);
  const hasInitializedRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasInitializedRef.current) {
      return;
    }

    hasInitializedRef.current = true;

    void (async () => {
      const browserToken = getOptionalStoredBrowserToken();

      if (browserToken) {
        void navigate(routePath.HOME, { replace: true });
        return;
      }

      try {
        const response = await createRoom();
        const { browserToken, inviteUrl, participantId, role, roomId } =
          response.data;

        setHomeSession({
          browserToken,
          participantId,
          roomId,
          userRole: serverRoleToUserRole(role),
        });
        setInviteLink(inviteUrl);
        console.log('방 생성 API 요청 성공', response);
      } catch (error) {
        console.error('방 생성 API 요청 실패', error);
      }
    })();
  }, [navigate]);

  const copyInviteLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = inviteLink;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';

      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }, [inviteLink]);

  const handleCopyLink = useCallback(() => {
    void copyInviteLink();
  }, [copyInviteLink]);

  return (
    <main className='bg-background flex min-h-dvh flex-col items-center px-[2.4rem] pt-[7.4rem] pb-[3.4rem]'>
      <img src={imgLogo} alt='머뭇' className='h-[2.6rem] w-[4.4rem]' />

      <div className='border-primary-400 mt-[5.4rem] flex size-[20rem] items-center justify-center overflow-hidden rounded-full border bg-linear-[141deg,rgba(255,208,232,0.4)_4.72%,rgba(255,240,248,0.4)_91.87%]'>
        <img
          src={characterMain}
          alt='머뭇 캐릭터'
          className='mt-[1.2rem] ml-[1.4rem] h-[22.4rem] w-[28.3rem] max-w-none object-contain'
        />
      </div>

      <section className='mt-[1.6rem] flex flex-col items-center text-center'>
        <h1 className='typo-head-sb-24 text-neutral-800'>가족을 초대해요</h1>
        <p className='typo-body-r-14 mt-[1.6rem] whitespace-pre-line text-neutral-300'>
          {'아래 링크를 복사해서\n가족에게 보내주세요'}
        </p>
      </section>

      <div className='mt-[3.2rem] flex h-[5.6rem] w-full max-w-[32.7rem] items-center justify-between rounded-[1.2rem] bg-white px-[2.4rem] text-left shadow-[0_0_0.4rem_0_var(--color-primary-200)]'>
        <span className='typo-body-sb-16 truncate text-neutral-300'>
          {inviteLink}
        </span>
        <button
          type='button'
          onClick={handleCopyLink}
          className='flex size-[2.4rem] items-center justify-center'
          aria-label={`${inviteLink} 링크 복사하기`}
        >
          <IcCopy aria-hidden className='size-[1.8rem] text-neutral-300' />
        </button>
      </div>

      <TextButton className='mt-[14.9rem] w-full max-w-[32.7rem]' size='large'>
        시작하기
      </TextButton>

      <p className='typo-caption-r-12 mt-[1.6rem] text-neutral-200'>
        링크를 받은 가족이 들어오면 머뭇을 시작해요
      </p>
    </main>
  );
};

export default OnboardingPage;
