
import React, { useState } from 'react';
import { concatStyles } from '../../../helpers/css-modules';
import Button from '../Button/Button';

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import desktopCSS from './desktop.scss';

import ImageDots1 from './src/dots-1.svg'
import ImageDots2 from './src/dots-2.svg'

const styles = concatStyles([
    criticalCSS,
    mobileCSS,
    desktopCSS
]);

const CaseBlock = ({ background, caseImg, label, cost }) => {
  return (
    <div className={styles.block} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.flexed}>
        <img src={caseImg} className={styles.img} />
        <div className={styles.info}>
          <Button as="span" color="secondary" className={styles.float_button}>
            <div className={styles.dot} style={{ backgroundImage: `url(${background})` }} />
            <div className={styles.span_block}>15%</div>
            1990₽
            <div className={styles.span_block_extra}>1990B</div>
          </Button>
          <div className={styles.title}>Рулетка</div>
          <div className={styles.label}>{label}</div>
          <Button className={styles.button}>Крутить рулетку</Button>
        </div>
      </div>
    </div>
  )
};

export default CaseBlock;