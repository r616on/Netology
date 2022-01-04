
import React, { useState } from 'react';
import classnames from 'classnames';
import { concatStyles } from '../../../../helpers/css-modules';
import HeadliveLenta from '../../../atoms/HeadliveLenta/HeadliveLenta';

import criticalCSS from './critical.scss';

const styles = concatStyles([
    criticalCSS,
]);

import itemliveLentaArr from "../../../templates/Index3/itemliveLentaArr.json";
import ItemliveLenta from '../../../atoms/ItemliveLenta/ItemliveLenta';

const LiveLenta = props => {
  const {
    typeLiveLenta,
    setTypeLiveLenta,
    isLiveLentaPosition,
    setLiveLentaPosition,
    isLiveLentaVisible
  } = props

  const liveLentaContainer = classnames(
    styles.block,
    {
      [styles.no_livelenta]: isLiveLentaPosition == 'vertical' || !isLiveLentaVisible
    }
  )

  return (
    <div className={liveLentaContainer}>
      <HeadliveLenta
        typeLiveLenta={typeLiveLenta}
        setTypeLiveLenta={setTypeLiveLenta}
        hasBody={true}
      />
      <div className={styles.overflow}>
      {...itemliveLentaArr.map((item: ItemliveLenta, index: number) => (
        <ItemliveLenta
          typeLiveLenta={typeLiveLenta}
          isFirst={index === 0}
          isLast={index === itemliveLentaArr.length - 1}
          to={item.to}
          key={index}
          type={item.type}
          title={item.title}
          active={item.active || false}
        ></ItemliveLenta>
      ))}
      </div>
    </div>
  )
};

export default LiveLenta;