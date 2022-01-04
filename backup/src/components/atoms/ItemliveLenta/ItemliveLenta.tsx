import * as React from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";
import { Link } from "react-router-dom";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import blue from "./icon/blue.png";
import iconAvatar from "./icon/iconAvatar.png";
import darkPurple from "./icon/darkPurple.png";
import gold from "./icon/gold.png";
import purple from "./icon/purple.png";
// import purchaseAndSalesHistory from "./icon/purchaseAndSalesHistory.png";

const iconArr = {
  blue: blue,
  darkPurple: darkPurple,
  purple: purple,
  gold: gold,
};

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface ItemliveLenta {
  className?: string;
  active?: boolean;
  type: string;
  to?: string;
  title: string;
  isLast?: string;
  isFirst?: string;
}

const ItemliveLenta: React.FC<ItemSidebar> = (props) => {
  const { className, active, type, to, title, isLast, isFirst } = props;

  let containerClass = classnames(styles.container, className, {
    [styles.last]: isLast,
    [styles.first]: isFirst,
  });
  if (active) {
    containerClass = classnames(
      styles.container,
      className,
      {
        [styles.last]: isLast,
        [styles.first]: isFirst,
      },
      styles.active
    );
  }

  return (
    <Link to={to} className={containerClass}>
      <img className={styles.img} src={iconArr[type]} alt="" />
      <img className={styles.icon} src={iconAvatar} alt="" />
      <div className={styles.row}>
        <div className={styles.text}>{title}</div>
      </div>
    </Link>
  );
};

export default ItemliveLenta;
