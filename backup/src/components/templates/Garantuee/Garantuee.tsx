import React from 'react';
import cn from 'classnames';
import { concatStyles } from "../../../helpers/css-modules";

import IndexTemplate from "../../organisms/IndexTemplate/IndexTemplate"

import criticalCSS from './critical.scss';
const styles = concatStyles([criticalCSS]);

import Button from '../../atoms/Button/Button';
import TitleBlock from '../../atoms/TitleBlock/TitleBlock';

import IconDots from './icons/dots.svg';
import IconMoment from './icons/moment.svg';
import IconMultiply from './icons/multiply.svg';
import IconQuality from './icons/quality.svg';
import IconSefeDeal from './icons/safe-deal.svg';
import IconSecurity from './icons/security.svg';
import IconSupport from './icons/support.svg';
import IconWallet from './icons/wallet.svg';

const Garantuee = () => {
  return (
    <IndexTemplate>
      <div className={styles.content_body}>
        <TitleBlock label="Гарантии" />
        <div className={styles.garantuee_block}>
          <div className={styles.block}>
            <div className={styles.col_1}>
              <div className={styles.icon}>
                <img src={IconMoment} />
              </div>
              <img src={IconDots} className={styles.decor_dots_1} />
            </div>
            <div className={styles.col_2}>
              <div className={styles.title}>Моментально</div>
              <div className={styles.decor_separator} />
              <img src={IconDots} className={styles.decor_dots_2} />
              <div className={styles.label}>
                Вы получите свой товар моментально, сразу после успешной оплаты.
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.col_1}>
              <div className={styles.icon}>
                <img src={IconSecurity} />
              </div>
              <img src={IconDots} className={styles.decor_dots_1} />
            </div>
            <div className={styles.col_2}>
              <div className={styles.title}>Безопасно</div>
              <div className={styles.decor_separator} />
              <img src={IconDots} className={styles.decor_dots_2} />
              <div className={styles.label}>
                Полученные нами данные о вас остаются конфиденциальны.
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.col_1}>
              <div className={styles.icon}>
                <img src={IconQuality} />
              </div>
              <img src={IconDots} className={styles.decor_dots_1} />
            </div>
            <div className={styles.col_2}>
              <div className={styles.title}>Качественно</div>
              <div className={styles.decor_separator} />
              <img src={IconDots} className={styles.decor_dots_2} />
              <div className={styles.label}>
                Мы предлагаем качественный и удобный сервис для вас
              </div>
            </div>
          </div>
        </div>
        <TitleBlock color="green" label="Все еще не уверены?" />
        <div className={styles.garantuee_block_2}>
          <div className={styles.block}>
            <div className={styles.col_1}>
              <div className={cn(styles.icon, styles.green)}>
                <img src={IconMultiply} />
              </div>
              <img src={IconDots} className={styles.decor_dots_1} />
            </div>
            <div className={styles.col_2}>
              <div className={styles.title}>Множество поставщиков</div>
              <div className={styles.decor_separator} />
              <img src={IconDots} className={styles.decor_dots_3} />
              <div className={styles.label}>
              Сотрудничество с поставщиками увеличивает наш ассортимент и поддерживает рубрику “Случайный аккаунт”
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.col_1}>
              <div className={cn(styles.icon, styles.green)}>
                <img src={IconSupport} />
              </div>
              <img src={IconDots} className={styles.decor_dots_1} />
            </div>
            <div className={styles.col_2}>
              <div className={styles.title}>Техническая поддержка</div>
              <div className={styles.decor_separator} />
              <img src={IconDots} className={styles.decor_dots_3} />
              <div className={styles.label}>
              У нас работает квалифицированная техническая поддержка, которая оперативно ответит на все ваши вопросы.
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.col_1}>
              <div className={cn(styles.icon, styles.green)}>
                <img src={IconSefeDeal} />
              </div>
              <img src={IconDots} className={styles.decor_dots_1} />
            </div>
            <div className={styles.col_2}>
              <div className={styles.title}>Безопасная сделка</div>
              <div className={styles.decor_separator} />
              <img src={IconDots} className={styles.decor_dots_3} />
              <div className={styles.label}>
              При возникновений проблем и спорных ситуаций всегда принимается справедливое решение. Мы несем ответсвенность за безопасность вашей сделки.
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.col_1}>
              <div className={cn(styles.icon, styles.green)}>
                <img src={IconWallet} />
              </div>
              <img src={IconDots} className={styles.decor_dots_1} />
            </div>
            <div className={styles.col_2}>
              <div className={styles.title}>Многообразие оплаты</div>
              <div className={styles.decor_separator} />
              <img src={IconDots} className={styles.decor_dots_3} />
              <div className={styles.label}>
              Мы поддерживаем множество способов оплаты, в том числе и зарубежные переводы.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.just_center}>
          <Button color="disabled">
            Сертификат о сайте
          </Button>
        </div>
      </div>
    </IndexTemplate>
  )
}

export default Garantuee