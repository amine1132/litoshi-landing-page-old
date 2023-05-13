import { memo, SVGProps } from 'react';

const EthereumEthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} fill='#EDF0F4' />
    <path d='M7.97821 3.2L7.91457 3.41617V9.6884L7.97821 9.75189L10.8897 8.03092L7.97821 3.2Z' fill='#343434' />
    <path d='M7.97818 3.2L5.06667 8.03092L7.97818 9.75189V6.70753V3.2Z' fill='#8C8C8C' />
    <path d='M7.97815 10.3033L7.94228 10.347V12.5813L7.97815 12.686L10.8914 8.58322L7.97815 10.3033Z' fill='#3C3C3B' />
    <path d='M7.97818 12.686V10.3033L5.06667 8.58322L7.97818 12.686Z' fill='#8C8C8C' />
    <path d='M7.97822 9.75171L10.8897 8.03074L7.97822 6.70735V9.75171Z' fill='#141414' />
    <path d='M5.06667 8.03074L7.97818 9.75171V6.70735L5.06667 8.03074Z' fill='#393939' />
  </svg>
);
const Memo = memo(EthereumEthIcon);
export { Memo as EthereumEthIcon };
