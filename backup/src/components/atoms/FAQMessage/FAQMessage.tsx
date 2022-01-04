import * as React from "react";
import { concatStyles } from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);
import ArrowIcon from "../../../images/icons/Arrow_8.png";
import exclamationPoint from "./ic-actions-danger-simple.png";


interface FAQMessage {
  text?: string;
}

const FAQMessage: React.FC<FAQMessage> = (props) => {
  const { text } = props;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img className={styles["exclamation-point"]} src={exclamationPoint} alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.content}>{text}</div>
      </div>
      <div className={styles.arrow}>
        <img className={styles["arrow-icon"]} src={ArrowIcon} alt="" />
      </div>
    </div>
  );
};
export default FAQMessage;
