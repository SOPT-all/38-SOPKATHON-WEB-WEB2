import { useRef, useState } from 'react';

import { IcCameraFilled } from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';

interface VideoProps {
  src: string;
  width: number;
  height: number;
  className?: string;
}

const Video = ({ src, width, height, className }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const srcWithFirstFrame = src.includes('#') ? src : `${src}#t=0.001`;

  const handleToggleClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      if (video.ended) video.currentTime = 0;
      void video.play();
    } else {
      video.pause();
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);
  const handleVideoEnded = () => setIsPlaying(false);

  return (
    <figure
      className={cn('relative overflow-hidden rounded-[20px]', className)}
      style={{ width, height }}
    >
      <video
        ref={videoRef}
        src={srcWithFirstFrame}
        preload='metadata'
        playsInline
        onClick={handleToggleClick}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onEnded={handleVideoEnded}
        className='h-full w-full cursor-pointer object-cover'
      />
      {!isPlaying && (
        <>
          <div className='pointer-events-none absolute inset-0 bg-black/50' />
          <button
            type='button'
            aria-label='영상 재생'
            onClick={handleToggleClick}
            className='absolute inset-0 m-auto flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full bg-white'
          >
            <IcCameraFilled className='text-primary-500 h-[1.8rem] w-[1.8rem]' />
          </button>
        </>
      )}
    </figure>
  );
};

export default Video;
