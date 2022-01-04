import * as React from "react";
import { concatStyles } from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);
import userAvatar from "../../../images/icons/ava.png";
import headphones from "../../../images/icons/headphones.png";

interface AvatarUserAndSupportChat {
  user: boolean;
  icon?: String;
  notification?: string;
  size?: string;
}

const AvatarUserAndSupportChat: React.FC<AvatarUserAndSupportChat> = (
  props
) => {
  const { icon, user, notification, size } = props;
  let markup;

  if (user) {
    markup = (
      <div className={classnames(styles.avatar, styles[size])}>
        <img className={styles.userAvatar} src={icon || userAvatar} alt="" />
      </div>
    );
  }
  if (user === false) {
    if (!notification) {
      markup = (
        <div className={classnames(styles.avatar, styles[size])}>
          <img className={styles.headphones} src={headphones} alt="" />
        </div>
      );
    }

    if (notification) {
      const classNotification = classnames(
        styles.avatar,
        styles.notification,
        styles[size]
      );
      const classHeadphones = classnames(
        styles.headphones,
        styles["headphones-notification"]
      );
      markup = (
        <div className={classNotification}>
          <div className={styles.icon}>
            <div className={styles.number}>{notification}</div>
          </div>
          <img className={classHeadphones} src={headphones} alt="" />
        </div>
      );
    }
  }
  return markup;
};
export default AvatarUserAndSupportChat;
