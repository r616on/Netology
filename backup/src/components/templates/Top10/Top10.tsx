import React from 'react';
import cn from 'classnames';
import { concatStyles } from "../../../helpers/css-modules";

import FastAccessChat from '../../organisms/FastAccessChat/FastAccessChat';
import IndexTemplate from "../../organisms/IndexTemplate/IndexTemplate"

import criticalCSS from './critical.scss';
const styles = concatStyles([criticalCSS]);

import Button from '../../atoms/Button/Button';
import TitleBlock from '../../atoms/TitleBlock/TitleBlock';
import SegmentedBlock from '../../atoms/SegmentedBlock/SegmentedBlock';
import SegmentedBlockItem from '../../atoms/SegmentedBlockItem/SegmentedBlockItem';

import ImgAva from '../../atoms/MarketBlock/src/ava.png'
import IconStart from './icons/star.svg';
import Pagination from '../../molecules/Pagination/Pagination';

const Top10 = () => {
  return (
    <IndexTemplate>
      <TitleBlock label="Топ Юзеров" />
      <div className={styles.content_body}>
        <SegmentedBlock doubleMobile={true}>
          <SegmentedBlockItem>
            <div className={styles.segmented_block}>
              <div className={styles.segmented_block_img}>
                <img src={ImgAva} className={styles.segmented_img} />
                <div className={cn(styles.badge, styles.silver)}>
                  <img src={IconStart} className={styles.icon_star} />
                  2 Место
                </div>
              </div>
              <div className={styles.nickname}>Santchezz</div>
              <div className={styles.stats}>
                <div className={styles.left_child}>
                  <div className={styles.title}>34 2819</div>
                  <div className={styles.label}>Купленные товары</div>
                </div>
                <div className={styles.right_child}>
                  <div className={styles.title}>118 523₽</div>
                  <div className={styles.label}>Заработанно</div>
                </div>
              </div>
            </div>
          </SegmentedBlockItem>
          <SegmentedBlockItem doubleMobile={true}>
            <div className={styles.segmented_block}>
              <div className={styles.segmented_block_img}>
                <img src={ImgAva} className={styles.segmented_img} />
                <div className={cn(styles.badge, styles.gold)}>
                  <img src={IconStart} className={styles.icon_star} />
                  1 Место
                </div>
              </div>
              <div className={styles.nickname}>Santchezz</div>
              <div className={styles.stats}>
                <div className={styles.left_child}>
                  <div className={styles.title}>34 2819</div>
                  <div className={styles.label}>Купленные товары</div>
                </div>
                <div className={styles.right_child}>
                  <div className={styles.title}>118 523₽</div>
                  <div className={styles.label}>Заработанно</div>
                </div>
              </div>
            </div>
          </SegmentedBlockItem>
          <SegmentedBlockItem doubleMobile={true}>
            <div className={styles.segmented_block}>
              <div className={styles.segmented_block_img}>
                <img src={ImgAva} className={styles.segmented_img} />
                <div className={cn(styles.badge, styles.bronze)}>
                  <img src={IconStart} className={styles.icon_star} />
                  3 Место
                </div>
              </div>
              <div className={styles.nickname}>Santchezz</div>
              <div className={styles.stats}>
                <div className={styles.left_child}>
                  <div className={styles.title}>34 2819</div>
                  <div className={styles.label}>Купленные товары</div>
                </div>
                <div className={styles.right_child}>
                  <div className={styles.title}>118 523₽</div>
                  <div className={styles.label}>Заработанно</div>
                </div>
              </div>
            </div>
          </SegmentedBlockItem>
        </SegmentedBlock>

        <div className={styles.your_place_title}>Ваше место</div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td data-label="Место">4856</td>
              <td data-label="Пользователь">
                <div>
                  <img src={ImgAva} />
                  Shenderro
                </div>
              </td>
              <td data-label="Купленные товары">863</td>
              <td data-label="Заработанно">58 924₽</td>
            </tr>
          </tbody>
        </table>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Место</td>
              <td>Пользователь</td>
              <td>Купленные товары</td>
              <td>Заработанно</td>
            </tr>
          </thead>
          <tbody>
            { [4,5,6,7].map(el => (
            <tr>
              <td data-label="Место">{el}</td>
              <td data-label="Пользователь">
                <div>
                  <img src={ImgAva} />
                  Evhen_823
                </div>
              </td>
              <td data-label="Купленные товары">863</td>
              <td data-label="Заработанно">58 924₽</td>
            </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </IndexTemplate>
  )
}

export default Top10