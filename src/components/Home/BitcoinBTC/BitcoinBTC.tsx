import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BitcoinBTC.module.css';
import { BitcoinBtcIcon } from './BitcoinBtcIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 17:11271 */
export const BitcoinBTC: FC<Props> = memo(function BitcoinBTC(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bitcoinBTC}>
        <BitcoinBtcIcon className={classes.icon} />
      </div>
    </div>
  );
});
