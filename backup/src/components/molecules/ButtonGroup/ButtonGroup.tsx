import * as React from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import Button from "../../atoms/Button/Button";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

import emailIcon from "../../../images/icons/at-1.svg";
import googleIcon from "../../../images/icons/gplus.svg";
import vkIcon from "../../../images/icons/vk.svg";

const ButtonGroup = ({ children, size }) => {
  return (
    <div className={classnames(styles.container, styles[size])}>
      <div className={styles["main-choice"]}>{children}</div>
      <div className={styles["alternative-choice"]}>
        <div className={styles["choice-text"]}>или</div>
        <div className={styles.group}>
          <Button
            as={"a"}
            color={"yellow"}
            round={true}
            size={size ? "small-registration" : "small"}
            className={styles.button}
          >
            <img src={emailIcon} className={styles.icon} alt="" />
          </Button>
          <Button
            as={"a"}
            color={"red"}
            round={true}
            size={size ? "small-registration" : "small"}
            className={styles.button}
          >
            <img src={googleIcon} className={styles.icon} alt="" />
          </Button>
          <Button
            as={"a"}
            color={"blue"}
            round={true}
            size={size ? "small-registration" : "small"}
            className={styles.button}
          >
            <img src={vkIcon} className={styles.icon} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
