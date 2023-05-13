import { memo, SVGProps } from 'react';

const Group4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={28} cy={28} r={28} fill='#D9D9D9' />
    <path d='M3.63997 42C21.98 45.92 57.596 45.92 53.9 17.36' stroke='#151516' strokeWidth={0.8} />
    <path
      d='M27.3001 13.72C43.9881 28.056 17.5468 36.4933 2.24009 38.92C-2.57591 26.824 1.91342 16.1466 4.76009 12.32C11.6201 4.05999 23.6134 10.92 27.3001 13.72Z'
      fill='#C0B9EB'
      stroke='#151516'
      strokeWidth={0.8}
    />
  </svg>
);
const Memo = memo(Group4Icon);
export { Memo as Group4Icon };
