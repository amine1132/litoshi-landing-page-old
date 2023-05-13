import { memo, SVGProps } from 'react';

const Vector15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 134 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 34H14.5222L18.4493 46L23.2291 25L26.7029 0L31.936 34L36.7731 13.5L41.6103 25L50.8009 19.5L57.5729 40.5L64.8287 34L69.1821 58L74.503 34L79.8238 43L82.2424 28L88.047 0L94.3353 18L103.042 22.5L105.461 46L108.847 34L112.717 54.5L118.037 28L121.423 56.5L125.293 34L127.228 42L134 49.5'
      stroke='#C1C7CD'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(Vector15Icon);
export { Memo as Vector15Icon };
