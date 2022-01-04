
import React, { useState } from 'react';
import classnames from 'classnames';
import { concatStyles } from '../../../../helpers/css-modules';
import Button from '../../../atoms/Button/Button';

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import desktopCSS from './desktop.scss';

const styles = concatStyles([
    criticalCSS,
    mobileCSS,
    desktopCSS
]);

import ImgBanner from './img/banner.png';
import ImgRank from './img/rank.png';
import IconArrowLeft from './img/arrow-left.svg';
import CircleProgress from '../../../molecules/CircleProgress/CircleProgress';

import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Banner = props => {
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 425
  let circleSize = 75
  if (isMobile) {
    circleSize = 65
  }
  if (width >= 1700) {
    circleSize = 85
  }
  if (width >= 2560) {
    circleSize = 100
  }


  return (
    <div className={styles.block}> 
      <div className={styles.info}>
        <Button as="button" className={styles['button-arrow']}>
          <img src={IconArrowLeft} />
        </Button>
        <div className={styles.row_first}>
          <img src={ImgBanner} className={styles.banner} />
          <Button color="secondary" className={( classnames(styles.accept_button, styles.accept_media_rule_revert ))}>
            Присоединиться
          </Button>
        </div>
        <div className={styles.row_second}>
          <div className={styles.account_block}>
            <CircleProgress size={circleSize} stroke={isMobile ? 3 : 5}>
              <img src={ImgRank} style={{ height: isMobile ? 30 : 35 }} />
            </CircleProgress>
            <div className={styles.account_info}>
              <div className={styles.account_name}>Аккаунт Warface</div>
              <div className={styles.account_rank}>25 Ранг</div>
            </div>
          </div>
          <Button color="secondary" className={( classnames(styles.accept_button, styles.accept_media_rule ))}>
            Присоединиться
          </Button>
          <div className={styles.timer}>
            <CircleProgress size={circleSize} stroke={isMobile ? 3 : 5} strokeBackground={2} max={30} now={24}>
              <div className={styles.timer_number}>24</div>
              <div className={styles.timer_text}>Часа</div>
            </CircleProgress>
            <CircleProgress size={circleSize} stroke={isMobile ? 3 : 5} strokeBackground={2} max={60} now={44}>
              <div className={styles.timer_number}>44</div>
              <div className={styles.timer_text}>Минут</div>
            </CircleProgress>
            <CircleProgress size={circleSize} stroke={isMobile ? 3 : 5} strokeBackground={2} max={60} now={5}>
              <div className={styles.timer_number}>05</div>
              <div className={styles.timer_text}>Секунд</div>
            </CircleProgress>
          </div>
        </div>
        <Button as="button" className={(classnames( styles['button-arrow'], styles['transform'] )) }>
          <img src={IconArrowLeft} />
        </Button>
      </div>
      <div className={styles.slider}>
        <div className={styles.dot} />
        <div className={styles.dot_active} />
        <div className={styles.dot} />
      </div>
    </div>
  )
};

export default Banner;