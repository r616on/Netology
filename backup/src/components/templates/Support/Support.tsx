import React from 'react';
import classnames from 'classnames';
import { concatStyles } from "../../../helpers/css-modules";

import FastAccessChat from '../../organisms/FastAccessChat/FastAccessChat';
import IndexTemplate from "../../organisms/IndexTemplate/IndexTemplate"

import criticalCSS from './critical.scss';
const styles = concatStyles([criticalCSS]);

import IconVK from './icons/vk.svg';
import IconEmail from './icons/email.svg';
import IconTime from './icons/time.svg';
import IconPt from './icons/pt.svg';

import Button from '../../atoms/Button/Button';

const Support = () => {
  return (
    <IndexTemplate>
      <div className={styles.container}>
        <div className={styles.block_contacts}>
          <div className={styles.blockHeader}>
            <div className={styles.title}>
              <span>Контактная информация</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.headerCol}>
              <Button
                  as={"a"}
                  href={"#"}
                  color={"blue"}
                  round={true}
                  bordered={true}
                >
                  <img src={IconVK} alt="" />
                </Button>
            </div>
            <div className={styles.headerContent}>
              <div className={styles.content_label}>СООБЩЕСТВО:</div>
              <div className={styles.content_label2}>ВКонтакте</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.headerCol}>
              <Button
                as={"a"}
                href={"#"}
                color={"yellow"}
                round={true}
                bordered={true}
              >
                <img src={IconEmail} alt="" />
              </Button>
            </div>
            <div className={styles.headerContent}>
              <div className={styles.content_label}>ПОЧТА:</div>
              <div className={styles.content_label2}>hello@warface.online</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.headerCol}>
              <Button
                as={"a"}
                href={"#"}
                color={"primary"}
                round={true}
                bordered={true}
              >
                <img src={IconTime} alt="" />
              </Button>
            </div>
            <div className={styles.headerContent}>
              <div className={styles.content_label}>ВРЕМЯ РАБОТЫ:</div>
              <div className={styles.content_label2}>с 10:30 до 22:30</div>
            </div>
          </div>
        </div>
        <div className={styles.bodyContent}>
          <FastAccessChat isOpen={true} />
        </div>
      </div>
    </IndexTemplate>
  )
}

export default Support