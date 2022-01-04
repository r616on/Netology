import * as React from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import SupportParty from "../../molecules/SupportParty/SupportParty";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface Chat {
  userName?: string;
}

const Chat: React.FC<Chat> = (props) => {
  return (
    <div className={styles.conteiner}>
      <SupportParty
        className={styles.avatar}
        userName={props.userName || "Shenderro1"}
      />
      <div className={styles.line}></div>
      <div className={styles.body}>{props.children}</div>
    </div>
  );
};

export default Chat;
