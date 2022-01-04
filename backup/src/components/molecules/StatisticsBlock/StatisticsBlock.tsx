import * as React from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface StatisticsBlock {
  className?: string;
  goods: string;
  user: string;
}

const StatisticsBlock: React.FC<StatisticsBlock> = (props) => {
  const { className, goods, user } = props;

  const containerClass = classnames(styles.container, className);
  const goodsIconClassGreen = classnames(styles["goods-icon"], styles.green);
  const goodsIconClassPurple = classnames(styles["goods-icon"], styles.purple);

  return (
    <div className={containerClass}>
      <div className={styles["statistic-goods"]}>
        <div className={goodsIconClassGreen}></div>
        <div className={styles["goods-text"]}>
          <div className={styles["text-title"]}>{goods}</div>
          <div className={styles["text-description"]}>Купленно товаров</div>
        </div>
      </div>
      <div className={styles["statistic-user"]}>
        <div className={goodsIconClassPurple}></div>
        <div className={styles["goods-text"]}>
          <div className={styles["text-title"]}>{user}</div>
          <div className={styles["text-description"]}>Пользователей</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBlock;
