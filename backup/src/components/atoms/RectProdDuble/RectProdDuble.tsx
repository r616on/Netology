import * as React from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);
interface RectProdDuble {
  title?: string;
  content?: string;
}

const RectProdDuble: React.FC<RectProdDuble> = (props) => {
  const { title, content } = props;

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.title}>КОЛ-ВО</div>
        <div className={styles.value}>{content}</div>
      </div>
      <div className={styles.second}>
        <div className={styles.status}>Выкл</div>
        <div className={styles.titleSecond}>ПРОДАВАТЬ ОТ</div>
        <div className={styles.body}>
          <div className={styles.value}>50</div>
          <div className={styles.specRow}>шт. и более</div>
        </div>
      </div>
    </div>
  );
};
export default RectProdDuble;
