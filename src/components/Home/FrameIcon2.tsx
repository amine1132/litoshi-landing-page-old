import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_82)'>
      <path
        d='M15.875 6.83333H9.04167C8.09818 6.83333 7.33333 7.59818 7.33333 8.54167V15.375C7.33333 16.3185 8.09818 17.0833 9.04167 17.0833H15.875C16.8185 17.0833 17.5833 16.3185 17.5833 15.375V8.54167C17.5833 7.59818 16.8185 6.83333 15.875 6.83333Z'
        stroke='#563AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.875 23.9167H9.04167C8.09818 23.9167 7.33333 24.6815 7.33333 25.625V32.4583C7.33333 33.4018 8.09818 34.1667 9.04167 34.1667H15.875C16.8185 34.1667 17.5833 33.4018 17.5833 32.4583V25.625C17.5833 24.6815 16.8185 23.9167 15.875 23.9167Z'
        stroke='#563AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M32.9583 23.9167H26.125C25.1815 23.9167 24.4167 24.6815 24.4167 25.625V32.4583C24.4167 33.4018 25.1815 34.1667 26.125 34.1667H32.9583C33.9018 34.1667 34.6667 33.4018 34.6667 32.4583V25.625C34.6667 24.6815 33.9018 23.9167 32.9583 23.9167Z'
        stroke='#563AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M24.4167 11.9583H34.6667' stroke='#563AFF' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M29.5417 6.83333V17.0833' stroke='#563AFF' strokeLinecap='round' strokeLinejoin='round' />
    </g>
    <defs>
      <clipPath id='clip0_24_82'>
        <rect width={41} height={41} fill='white' transform='translate(0.5)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
