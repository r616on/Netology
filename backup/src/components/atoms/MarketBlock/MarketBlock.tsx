
import React, { useState } from 'react';
import { concatStyles } from '../../../helpers/css-modules';
import CircleProgress from '../../molecules/CircleProgress/CircleProgress';

import criticalCSS from './critical.scss';

import ImgVip from './src/vip.png'
import ImgAva from './src/ava.png'
import IconHeart from './src/heart.svg'
import IconMore from './src/more.svg'
import Button from '../Button/Button';

const styles = concatStyles([
    criticalCSS,
]);

const MarketBlock = ({ background, marketImg, label, cost }) => {
  return (
    <div className={styles.block}>
      <div className={styles.new_position}>
        <div className={styles.new}>new</div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.info}>
          <CircleProgress max={4} now={3} size={90} strokeColor="gray">
            <img src={ImgVip} className={styles.vip} />
            <img src={marketImg} className={styles.img} />
          </CircleProgress>
        </div>
        <div className={styles.grid}>
          <div className={styles.title}>Makmilan Gr-23</div>
          <div className={styles.label}>Тип: Оружие</div>
          <div className={styles.label}>Кол: 33</div>
          <div className={styles.label}>Продажа от: 33 шт</div>
          <div className={styles.label}>Срок: Навсегда</div>
        </div>
        <div className={styles.heart}>
          <img src={IconHeart} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.user}>
          <div className={styles.avatar_block}>
            <img className={styles.avatar} src={ImgAva} />
            <div className={styles.avatar_online} />
          </div>
          <div className={styles.username}>
            Allice
          </div>
        </div>
        <Button as="button" className={styles.button_buy}>
          <span className={styles.button_buy_text}>Цена</span>
          <span className={styles.button_buy_cost}>120.00₽</span>
        </Button>
        <Button round={true}>
          <img src={IconMore} />
        </Button>
      </div>
    </div>
  )
};

export default MarketBlock;