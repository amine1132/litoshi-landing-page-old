import { memo, SVGProps } from 'react';

const BitcoinBtcIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.7607 9.93524C14.6922 14.221 10.3514 16.8292 6.06516 15.7605C1.78069 14.692 -0.827536 10.351 0.241391 6.06558C1.30938 1.77935 5.65016 -0.82907 9.93509 0.239387C14.221 1.30785 16.8291 5.64936 15.7605 9.93532L15.7606 9.93524H15.7607Z'
      fill='#F7931A'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.5286 6.86002C11.6878 5.7954 10.8773 5.22312 9.76894 4.84136L10.1285 3.39923L9.25063 3.18048L8.90061 4.58464C8.66982 4.52708 8.43282 4.47285 8.19726 4.41908L8.54982 3.00565L7.67249 2.78691L7.31274 4.22857C7.12176 4.18509 6.93419 4.14211 6.7522 4.09683L6.75321 4.09229L5.54262 3.78999L5.30909 4.7276C5.30909 4.7276 5.9604 4.8769 5.94667 4.88609C6.30216 4.97482 6.36644 5.21014 6.35577 5.39666L5.9462 7.03959C5.97068 7.0458 6.00243 7.0548 6.03747 7.06887L6.01198 7.06251C5.99031 7.05709 5.9678 7.05146 5.94468 7.04592L5.3706 9.34742C5.32716 9.45542 5.21689 9.61751 4.96835 9.55596C4.97714 9.56871 4.3303 9.39673 4.3303 9.39673L3.89445 10.4016L5.03685 10.6864C5.16196 10.7178 5.28558 10.75 5.40796 10.7819C5.49347 10.8042 5.57837 10.8263 5.66274 10.8479L5.29947 12.3066L6.17632 12.5253L6.53607 11.0821C6.77562 11.1471 7.00809 11.2071 7.23567 11.2637L6.87713 12.7001L7.75504 12.9188L8.11827 11.4629C9.61522 11.7462 10.7408 11.632 11.2146 10.278C11.5964 9.18784 11.1956 8.55906 10.408 8.14902C10.9816 8.01674 11.4137 7.63947 11.5289 6.86014L11.5286 6.85995L11.5286 6.86002ZM9.52283 9.67247C9.27392 10.6726 7.70841 10.2591 6.99213 10.07C6.9277 10.0529 6.87014 10.0377 6.82102 10.0255L7.30309 8.09306C7.36294 8.108 7.43608 8.12441 7.51894 8.14301L7.51895 8.14301C8.25985 8.30928 9.77785 8.64995 9.52287 9.67247H9.52283ZM7.66758 7.24626C8.26475 7.40563 9.56746 7.7533 9.79434 6.84429H9.79442C10.0261 5.91459 8.76007 5.6343 8.14175 5.4974C8.07219 5.482 8.01082 5.46842 7.96071 5.45592L7.52365 7.20857C7.56492 7.21886 7.61334 7.23178 7.66758 7.24626Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(BitcoinBtcIcon);
export { Memo as BitcoinBtcIcon };