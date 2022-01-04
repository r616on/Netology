import React from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import AvatarUserAndSupportChat from "../../atoms/AvatarUserAndSupportChat/AvatarUserAndSupportChat";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface SupportParty {
  userName: string;
}

const SupportParty: React.FC<SupportParty> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <AvatarUserAndSupportChat user={true} size={"big"} />
        </div>
        <div className={styles.name}>{props.userName}</div>
      </div>
      <div className={styles.support}>
        <div className={styles.avatar}>
          <AvatarUserAndSupportChat
            user={false}
            size={"big"}
            notification={"+3"}
          />
        </div>
        <div className={styles.name}>Supported</div>
      </div>
    </div>
  );
};

export default SupportParty;
