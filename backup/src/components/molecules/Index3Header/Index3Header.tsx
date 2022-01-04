import React, { useLayoutEffect, useState } from "react";
import classnames from "classnames";

import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import criticalLanding from "../LandingHeader/critical.scss";
import mobileCSS from "./mobile.scss";
import desktopCSS from "./desktop.scss";

import TopMenu from "../TopMenu/TopMenu";
import Button from "../../atoms/Button/Button";

import IconAvatar from "./img/ava.png";
import IconUser from "./img/user.svg";
import IconNotification from "./img/notification.svg";
import IconArrowDown from "./img/arrow-down.svg";
import IconPlus from "./img/plus.svg";
import IconNotificationShop from "./img/notification_shop.svg";
import ImgBackgroundSrc from "../../templates/Index3/img/logo-background.png";
import ImgLogotypeSrc from "../../templates/Index3/img/logo.png";

import IconProfileMyProfile from "./img/profile_my_profile.svg";
import IconProfileMyShopItems from "./img/profile_my_shop_items.svg";
import IconProfileMyDeliveries from "./img/profile_my_deliveries.svg";
import IconProfileMyAwards from "./img/profile_my_awards.svg";
import IconProfileMySettings from "./img/profile_my_settings.svg";
import IconProfileMyWallet from "./img/profile_my_wallet.svg";
import IconProfileReferrals from "./img/profile_referrals.svg";
import IconProfileQuit from "./img/profile_quit.svg";
import IconProfileClose from "./img/profile_close.svg";
import IconProfileCloseDark from "./img/profile_close_dark.svg";
import ImgProfileFooter from "./img/profile_footer.svg";
import ImgBurger from "../../templates/Index3/img/burger.png";
import IconHideLiveLenta from "./img/hide_livelenta.svg";
import { Link } from "react-router-dom";

const styles = concatStyles([
  criticalCSS,
  criticalLanding,
  desktopCSS,
  mobileCSS,
]);

const notificationRow = [
  {
    title: "Стол заказа!",
    body: "Товар по вашему запросу был выставлен на продажу!",
    time: "22:15",
  },
  {
    title: "Новое достижение!",
    body: "Вы получили достижение “Бригада” за 100 сообщений!",
    time: "22:15",
  },
  {
    title: "Ограничение!",
    body: "Вы получили бан на 7 дней, так как нарушили правила пользования сайта!",
    time: "22:15",
  },
  {
    title: "Сотдрудничество!",
    body: 'По вашему запросу был заблокирован пользователь <a href="#">Nikita124</a>',
    time: "22:15",
  },
  {
    title: "Сотдрудничество!",
    body: 'По вашему запросу был заблокирован пользователь <a href="#">Nikita124</a>',
    time: "22:15",
  },
  {
    title: "Сотдрудничество!",
    body: 'По вашему запросу был заблокирован пользователь <a href="#">Nikita124</a>',
    time: "22:15",
  },
];

const Index3Header = (props) => {
  const [isMenuOpen, setMenuState] = useState(false);
  const [isNotificationOpen, setNotificationState] = useState(false);
  const [isProfileOpen, setProfileState] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuState(!isMenuOpen);
  };
  const toggleClassNames = classnames(styles.toggle, styles.button_hide, {
    [styles.toggle_active]: isMenuOpen,
  });
  const hidenMenu = (e) => {
    setProfileState(false);
    setNotificationState(false);
  };
  return (
    <div
      className={classnames(
        styles.header,
        isProfileOpen && styles["active-overlay"]
      )}
    >
      {isNotificationOpen && (
        <div className={styles["header-owerlay"]} onClick={hidenMenu}></div>
      )}
      {isProfileOpen && (
        <div className={styles["header-owerlay"]} onClick={hidenMenu}></div>
      )}
      <div className={styles.burger_row}>
        <div className={styles.brogRow}>
          {!props.isSidebarVisible && (
            <img
              onClick={props.handleSidebarVisible}
              className={styles.burger}
              src={ImgBurger}
              alt=""
            />
          )}
          {!props.isLiveLentaVisible && (
            <img
              onClick={props.setLiveLentaVisible}
              className={styles.burger}
              src={IconHideLiveLenta}
              alt=""
            />
          )}
        </div>
        <TopMenu
          isOpen={isMenuOpen}
          isDark={true}
          isHome={true}
          buttons={props.buttons}
        />
      </div>
      <div className={styles.block}>
        <img src={ImgBackgroundSrc} className={styles["background-image"]} />
        <div className={styles["header-row"]}>
          <Link to="/">
            <img src={ImgLogotypeSrc} className={styles.logotype} />
          </Link>
          <div className={styles.actions}>
            <Button
              as="button"
              round={true}
              onClick={() => setNotificationState(!isNotificationOpen)}
              className={isNotificationOpen && styles["btn-visible"]}
            >
              <img src={IconNotification} />
            </Button>
            {isNotificationOpen && (
              <div className={styles.notification_block}>
                <div className={styles.notification_title_row}>
                  <div>
                    Уведомления{" "}
                    <span className={styles.notification_title_new}>(+4)</span>
                  </div>
                  <div className={styles.notification_title_all}>(43)</div>
                </div>
                <div className={styles.notification_body}>
                  {notificationRow.map((elem) => (
                    <div className={styles.notification_row}>
                      <div className={styles.notification_row_icon}>
                        <img src={IconNotificationShop} />
                      </div>
                      <div className={styles.notification_row_body}>
                        <div className={styles.notification_row_body_title}>
                          {elem.title}
                        </div>
                        <div
                          dangerouslySetInnerHTML={{ __html: elem.body }}
                          className={styles.notification_row_body_body}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.notification_footer}>Показать все</div>
              </div>
            )}
            <Button
              as="button"
              color="orange"
              round={true}
              className={styles.button_hide}
              onClick={() => setProfileState(!isProfileOpen)}
            >
              <img src={IconUser} />
            </Button>
            <a className={toggleClassNames} onClick={toggleMenu} />
            <Button
              as="div"
              className={styles.profile}
              onClick={() => setProfileState(!isProfileOpen)}
            >
              <div className={styles.absolute_block}>
                <Button as="button" className={styles.absolute_first}>
                  5 100B
                </Button>
                <Button
                  as="button"
                  color="secondary"
                  className={styles.absolute_second}
                >
                  5 100₽
                  <img src={IconPlus} className={styles.icon_plus} />
                </Button>
              </div>
              <div className={styles.block_avatar}>
                <img className={styles.avatar} src={IconAvatar} />
                Shenderro
              </div>
              <img className={styles.arrow_down} src={IconArrowDown} />
            </Button>
            {isProfileOpen && (
              <div className={classnames(styles.profile_menu, styles.padding)}>
                <div className={styles.profile_title}>
                  <div className={styles.profile_title_row_first}>
                    Меню
                    <img
                      src={IconProfileClose}
                      onClick={() => setProfileState(false)}
                    />
                  </div>
                  <div className={styles.profile_title_row_second}>
                    <Button as="div" className={styles.profile}>
                      <div>
                        <Button as="button" className={styles.absolute_first}>
                          5 100B
                        </Button>
                        <Button
                          as="button"
                          color="secondary"
                          className={styles.absolute_second}
                        >
                          5 100₽
                          <img src={IconPlus} className={styles.icon_plus} />
                        </Button>
                      </div>
                      <div className={styles.block_avatar}>
                        <img className={styles.avatar} src={IconAvatar} />
                        Shenderro
                      </div>
                    </Button>
                  </div>
                </div>
                <a href="#" className={styles.profile_button}>
                  <img
                    src={IconProfileMyProfile}
                    className={styles.profile_button_img}
                  />
                  <div className={styles.profile_button_label}>Мой профиль</div>
                </a>
                <a href="#" className={styles.profile_button}>
                  <img
                    src={IconProfileMyShopItems}
                    className={styles.profile_button_img}
                  />
                  <div className={styles.profile_button_label}>Мои товары</div>
                </a>
                <a href="#" className={styles.profile_button}>
                  <img
                    src={IconProfileMyDeliveries}
                    className={styles.profile_button_img}
                  />
                  <div className={styles.profile_button_label}>
                    Стол заказов
                  </div>
                </a>
                <a
                  href="#"
                  className={classnames(
                    styles.profile_button,
                    styles.profile_button_active
                  )}
                >
                  <img
                    src={IconProfileMyAwards}
                    className={styles.profile_button_img}
                  />
                  <div className={styles.profile_button_label}>Достижения</div>
                </a>
                <a href="#" className={styles.profile_button}>
                  <img
                    src={IconProfileMySettings}
                    className={styles.profile_button_img}
                  />
                  <div className={styles.profile_button_label}>Настройки</div>
                </a>
                <a href="#" className={styles.profile_button}>
                  <img
                    src={IconProfileMyWallet}
                    className={styles.profile_button_img}
                  />
                  <div className={styles.profile_button_label}>
                    Пополение и вывод
                  </div>
                </a>
                <a href="#" className={styles.profile_button}>
                  <img
                    src={IconProfileReferrals}
                    className={styles.profile_button_img}
                  />
                  <div className={styles.profile_button_label}>
                    Реферальная система
                  </div>
                </a>
                <a href="#" className={styles.profile_button}>
                  <img
                    src={IconProfileQuit}
                    className={styles.profile_button_img}
                  />
                  <div className={styles.profile_button_label}>
                    Выйти из аккаунта
                  </div>
                </a>
                <div className={styles.profile_footer}>
                  <img
                    className={styles.profile_footer_img}
                    src={ImgProfileFooter}
                  />
                  <div
                    className={styles.profile_footer_close}
                    onClick={() => setProfileState(false)}
                  >
                    <img
                      className={styles.profile_footer_close_img}
                      src={IconProfileCloseDark}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index3Header;
