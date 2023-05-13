import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './GitcoinGTC.module.css';
import { GitcoinGtcIcon } from './GitcoinGtcIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 17:11253 */
export const GitcoinGTC: FC<Props> = memo(function GitcoinGTC(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.gitcoinGTC}>
        <GitcoinGtcIcon className={classes.icon} />
      </div>
    </div>
  );
});
