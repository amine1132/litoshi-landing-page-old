import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './EthereumETH.module.css';
import { EthereumEthIcon } from './EthereumEthIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 17:11234 */
export const EthereumETH: FC<Props> = memo(function EthereumETH(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ethereumETH}>
        <EthereumEthIcon className={classes.icon} />
      </div>
    </div>
  );
});
