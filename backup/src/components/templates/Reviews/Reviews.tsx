import React from 'react';
import cn from 'classnames';
import { concatStyles } from "../../../helpers/css-modules";

import IndexTemplate from "../../organisms/IndexTemplate/IndexTemplate"

import criticalCSS from './critical.scss';
const styles = concatStyles([criticalCSS]);

import Button from '../../atoms/Button/Button';
import TitleBlock from '../../atoms/TitleBlock/TitleBlock';
import SegmentedBlock from '../../atoms/SegmentedBlock/SegmentedBlock';
import SegmentedBlockItem from '../../atoms/SegmentedBlockItem/SegmentedBlockItem';

import ImgAva from '../../atoms/MarketBlock/src/ava.png'
import IconDots from './icons/dots.svg'
import Pagination from '../../molecules/Pagination/Pagination';
import ChatInput from '../../molecules/ChatInput/ChatInput';
const Reviews = () => {
  return (
    <IndexTemplate>
    <div className={styles.content_body}>
        <TitleBlock label="Отзывы" rightInfo={(
          <div className={styles.info_all}>
            Количество отзывов:  753
          </div>
        )}/>
        <div className={styles.headReviews}>
          { [1,2,3].map(el => (
          <SegmentedBlock>
            <SegmentedBlockItem className={styles.first}>
              <div className={styles.segmented_block}>
                <div className={styles.segmented_block_img}>
                  <img src={ImgAva} className={styles.segmented_img} />
                </div>
                <div>
                  <div className={styles.nickname}>Santchezz</div>
                  <div className={styles.stats}>01:05 27.12.2019</div>
                </div>
              </div>
            </SegmentedBlockItem>
            <SegmentedBlockItem>
              <div className={styles.segmented_content}>
                Потрясный сайт! Без обманов, с реальным процентом полезных выигрышей,даже самое слабое из возможных оправдывает свои деньги! Сделано потрясающе! Спасибо ребятам
              </div>
            </SegmentedBlockItem>
          </SegmentedBlock>
          ))}
        </div>
        <div className={styles.button_center}>
          <Button  color="disabled">
            Показать еще 5
            <img src={IconDots} />
          </Button>
        </div>
        <Pagination />
        <TitleBlock label="Оставить отзыв" />
        <ChatInput label="Напишите свой отзыв" disablePage={false} disableCamera={false} />
        <div className={styles.chat_message}>
        Спасибо. Ваш отзыв будет размещен в течение дня.
        </div>
      </div>
    </IndexTemplate>
  )
}

export default Reviews