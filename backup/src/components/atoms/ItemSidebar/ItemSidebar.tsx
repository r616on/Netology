import * as React from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";
import { Link } from "react-router-dom";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import sellAProduct from "./icon/sellAProduct.png";
import bookmarks from "./icon/bookmarks.png";
import browsingHistory from "./icon/browsingHistory.png";
import purchaseAndSalesHistory from "./icon/purchaseAndSalesHistory.png";

const iconArr = {
  sellAProduct: sellAProduct,
  bookmarks: bookmarks,
  browsingHistory: browsingHistory,
  purchaseAndSalesHistory: purchaseAndSalesHistory,
};

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface ItemSidebar {
  className?: string;
  active?: boolean;
  type: string;
  to?: string;
  title: string;
  isLast?: string;
  isFirst?: string;
}

const ItemSidebar: React.FC<ItemSidebar> = (props) => {
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
      <div className={styles["item-icon"]}>
        <img className={styles["item-icon-img"]} src={iconArr[type]} alt="" />
      </div>
      <div className={styles["item-text"]}>{title}</div>
    </Link>
  );
};

export default ItemSidebar;
