import * as React from "react";
import { concatStyles } from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);
import icon from "../../../images/icons/date-icon.png";
import close from "../../../images/icons/close.png";
import triangle from "../../../images/icons/triangle.png";

interface Message {
  user: boolean;
  date?: string;
  text?: string;
}

const Message: React.FC<Message> = (props) => {
  const { user, date, text } = props;
  let markup: any;
  if (user) {
    markup = (
      <div className={styles.conteiner}>
        <div className={styles["triangle-right"]}>
          <img src={triangle} alt="" />
        </div>
        <div className={styles.row}>
          <div className={styles["message-right"]}>{text}</div>
          <div className={styles.date}>
            <img className={styles["date-icon"]} src={icon} alt="" />
            <div className={styles["date-text"]}>{date}</div>
          </div>
          <img className={styles["close"]} src={close} alt="" />
        </div>
      </div>
    );
  }
  if (user === false) {
    markup = (
      <div className={styles.conteiner}>
        <div className={styles.row}>
          <div className={styles.date}>
            <img className={styles["date-icon"]} src={icon} alt="" />
            <div className={styles["date-text"]}>{date}</div>
          </div>
          <div className={styles["message-left"]}>{text}</div>
        </div>
        <div className={styles["triangle-left"]}>
          <img src={triangle} alt="" />
        </div>
      </div>
    );
  }
  return markup;
};
export default Message;
