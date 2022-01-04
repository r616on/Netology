
import React, { useState } from 'react';
import cn from 'classnames';
import { concatStyles } from '../../../helpers/css-modules';

import criticalCSS from './critical.scss';

import ImageDots from './src/dots.svg'

const styles = concatStyles([
    criticalCSS,
]);

const TitleBlock = ({ label, rightInfo, color }) => {
  return (
    <div className={styles.block}>
      <img className={styles.dots} src={ImageDots} />
      <div className={cn(styles.label, [styles[color]])}>{ label }</div>
      { rightInfo && (
        <div className={styles.rightBlock}>
          {rightInfo}
        </div>
      )}
    </div>
  )
};

export default TitleBlock;