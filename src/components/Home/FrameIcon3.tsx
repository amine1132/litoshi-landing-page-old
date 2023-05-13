import { memo, SVGProps } from 'react';

const FrameIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_89)'>
      <path
        d='M21.3335 5.125C25.3239 8.6554 30.532 10.4936 35.8543 10.25C36.6292 12.886 36.8663 15.6508 36.5515 18.3803C36.2368 21.1097 35.3765 23.748 34.022 26.1384C32.6674 28.5288 30.8462 30.6225 28.6664 32.2952C26.4867 33.9678 23.993 35.1852 21.3335 35.875C18.674 35.1852 16.1803 33.9678 14.0006 32.2952C11.8208 30.6225 9.99958 28.5288 8.64501 26.1384C7.29045 23.748 6.43022 21.1097 6.11545 18.3803C5.80067 15.6508 6.03778 12.886 6.81266 10.25C12.135 10.4936 17.3431 8.6554 21.3335 5.125Z'
        stroke='#563AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_89'>
        <rect width={41} height={41} fill='white' transform='translate(0.833496)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon3);
export { Memo as FrameIcon3 };
