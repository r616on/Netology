
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { concatStyles } from '../../../helpers/css-modules';

import criticalCSS from './critical.scss';

import IconArrowDown from './img/arrow-down.svg';
import IconContactChat from './img/contact-chat.svg';
import IconHeadphones from './img/headphones.svg';
import ImgWarface from './img/warface.png';

const styles = concatStyles([
    criticalCSS,
]);

const Index3Footer = ({ background, marketImg, label, cost, className }) => {
  const classes = classNames(
    className,
    [styles.block]
  )
  return (
    <div className={classes}>
      <div className={styles.selector}>
        <img src={ImgWarface} className={styles.selector_img} />
        <div className={styles.selector_text}>Warface</div>
        <img src={IconArrowDown} className={styles.drop_icon} />
      </div>
      <div className={styles.split_buttons}>
        <a className={styles.left} href="#">
          <img className={styles.split_img} src={IconContactChat} />
          Мои сообщения
        </a>
        <Link className={styles.right} to="support">
          <img className={styles.split_img} src={IconHeadphones} />
          Тех. поддержка
        </Link>
      </div>
    </div>
  )
}
export default Index3Footer