import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_76)'>
      <path
        d='M13.6667 22.2083V7.6875C13.6667 7.00788 13.9366 6.3561 14.4172 5.87554C14.8978 5.39498 15.5496 5.125 16.2292 5.125C16.9088 5.125 17.5606 5.39498 18.0411 5.87554C18.5217 6.3561 18.7917 7.00788 18.7917 7.6875V20.5'
        stroke='#563AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.7917 19.6458V16.2292C18.7917 15.8927 18.8579 15.5594 18.9867 15.2485C19.1155 14.9376 19.3043 14.6552 19.5422 14.4172C19.7802 14.1793 20.0626 13.9905 20.3735 13.8617C20.6844 13.7329 21.0177 13.6667 21.3542 13.6667C21.6907 13.6667 22.0239 13.7329 22.3348 13.8617C22.6457 13.9905 22.9282 14.1793 23.1661 14.4172C23.4041 14.6552 23.5928 14.9376 23.7216 15.2485C23.8504 15.5594 23.9167 15.8927 23.9167 16.2292V20.5'
        stroke='#563AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M23.9167 17.9375C23.9167 17.2579 24.1866 16.6061 24.6672 16.1255C25.1478 15.645 25.7995 15.375 26.4792 15.375C27.1588 15.375 27.8106 15.645 28.2911 16.1255C28.7717 16.6061 29.0417 17.2579 29.0417 17.9375V20.5'
        stroke='#563AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M29.0417 19.6458C29.0417 18.9662 29.3116 18.3144 29.7922 17.8339C30.2728 17.3533 30.9245 17.0833 31.6042 17.0833C32.2838 17.0833 32.9356 17.3533 33.4161 17.8339C33.8967 18.3144 34.1667 18.9662 34.1667 19.6458V27.3333C34.1667 30.0518 33.0868 32.6589 31.1645 34.5812C29.2423 36.5034 26.6351 37.5833 23.9167 37.5833H20.5H20.8553C19.1578 37.5836 17.4868 37.1623 15.9924 36.3572C14.4979 35.5522 13.2268 34.3885 12.2932 32.9708C12.1811 32.8003 12.0695 32.6295 11.9583 32.4583C11.4253 31.64 9.55471 28.3788 6.34475 22.673C6.01752 22.0914 5.93011 21.405 6.10111 20.7599C6.27211 20.1148 6.68803 19.5619 7.26042 19.2188C7.87008 18.8529 8.5845 18.7013 9.29019 18.788C9.99588 18.8747 10.6524 19.1946 11.1554 19.6971L13.6667 22.2083'
        stroke='#563AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_76'>
        <rect width={41} height={41} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
