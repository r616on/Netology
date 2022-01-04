import * as React from 'react';
import classnames from 'classnames';
import {concatStyles} from "../../../helpers/css-modules";

import Advantage from '../../atoms/Advantage/Advantage';

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import tabletCSS from './tablet.scss';
import desktopCSS from './desktop.scss';

const styles = concatStyles([
    criticalCSS,
    mobileCSS,
    tabletCSS,
    desktopCSS
]);

const AdvantagesList = () => (
  <div className={styles.container}>
      <Advantage
          title={'Выгодные предложения'}
          className={styles.item}
      >
          Гарантия безопасной сделки, а также<br/>
          удобная система реферальных бонусов!
      </Advantage>
      <Advantage
          title={'Выгодные предложения'}
          className={styles.item}
      >
          Ежедневно бесплатные розыгрыши<br/>
          для наших пользователей!
      </Advantage>
      <Advantage
          title={'Выгодные предложения'}
          className={styles.item}
      >
          Полезная информация на форуме<br/>
          и бронирование запросов на товары!
      </Advantage>
  </div>
);
export default AdvantagesList;
