import * as React from "react";
import Button from "../../atoms/Button/Button";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

import vkIcon from "../../../images/icons/vk.svg";

const Login = ({ onLogin }) => (
  <div className={styles.container}>
    <div className={styles["social-button"]}>
      <Button
        as={"a"}
        href={"#"}
        color={"info"}
        round={true}
        bordered={true}
        className={styles["btn-vk"]}
      >
        <img src={vkIcon} alt="" />
      </Button>
    </div>
    <div className={styles.button}>
      <Button as={"a"} href={"#"} onClick={onLogin} className={styles.btn}>
        Войти
      </Button>
    </div>
  </div>
);

export default Login;
