import React from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import Modal from "../../atoms/Modal/Modal";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const FulfillTheCondition = ({ isOpen, onClose }) => {
  return (
    <Modal title={"Выполните условия"} isOpen={isOpen} onClose={onClose}>
      <div className={styles.title}>Условия открытия бесплатной коробки:</div>
      <ul className={styles.row}>
        <li className={styles.item}>
          Авторизоваться через{" "}
          <span className={styles["link-blue"]}>Вконтакте</span>.
        </li>
        <li className={styles.item}>
          Подписаться на{" "}
          <span className={styles["link-blue"]}>Warface Vip</span> .
        </li>
        <li className={styles.item}>
          Поделиться данной записью на своей странице.
        </li>
        <li className={styles.item}>
          Минимум 1 раз{" "}
          <span className={styles["link-blue"]}> пополнить баланс</span>.
        </li>
        <li className={styles.item}>
          Подписаться на{" "}
          <span className={styles["link-blue"]}> Telegram канал</span>.
        </li>
      </ul>
    </Modal>
  );
};

export default FulfillTheCondition;
