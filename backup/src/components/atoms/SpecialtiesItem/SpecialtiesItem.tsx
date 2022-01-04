import * as React from "react";
import { concatStyles } from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import stormtrooper from "./rifleman-shturm.png";
import sniper from "./rifleman-sniper.png";
import medic from "./rifleman-med.png";
import engineer from "./rifleman-injen.png";
import other from "./else.png";
import otherActive from "./other-active.svg";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const specialtiesArr: object = {
  stormtrooper: stormtrooper,
  sniper: sniper,
  medic: medic,
  engineer: engineer,
  other: other,
  otherActive: otherActive,
};

interface SpecialtiesItem {
  status?: string;
  text?: string;
  type?: string;
}

const SpecialtiesItem: React.FC<SpecialtiesItem> = ({
  children,
  type,
  status,
}) => {
  const classContainer = classnames(styles.container, styles[status]);
  let icon;
  let classIcon = styles.icon;
  let classText = styles.text;
  if (!type) {
    type = "other";
    classIcon = classnames([styles.icon], [styles["else-icon"]]);
    if (status === "active") {
      type = "otherActive";
    }
  }

  return (
    <div
      className={classContainer}
      // activeClassName={styles.active}
      //   to={to}
      //   exact={true}
    >
      <div className={styles.row}>
        <div className={classIcon}>
          <img className={styles.img} src={specialtiesArr[type]} alt="" />
        </div>
        <div className={classText}>{children}</div>
      </div>
    </div>
  );
};
export default SpecialtiesItem;
