import * as React from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";
import { Link } from "react-router-dom";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

// import blue from "./icons/blue.png";
import iconUser from "./icons/user-gray.svg";
import iconUserActive from "./icons/user-white.svg";
import iconBox from "./icons/box-gray.svg";
import iconBoxActive from "./icons/box-white.svg";

import SegmentedControl from "../SegmentedControl/SegmentedControl";
import SegmentedControlItem from "../SegmentedControlItem/SegmentedControlItem";
import Button from "../../organisms/MenuLiveLentaTooltip/Button";
// import browsingHistory from "./icon/browsingHistory.png";
// import purchaseAndSalesHistory from "./icon/purchaseAndSalesHistory.png";
const styles = concatStyles([criticalCSS, desktopCSS, tabletCSS, mobileCSS ]);

interface HeadliveLenta {
  className?: string;
  typeLiveLenta: string,
  hasBody: boolean,
  setTypeLiveLenta: (arg0: string) => string,
  isLiveLentaPosition: string,
  setLiveLentaPosition: (arg0: string) => string
}

const HeadliveLenta: React.FC<HeadliveLenta> = (props) => {
  const {
    className,
    typeLiveLenta,
    setTypeLiveLenta,
    isLiveLentaPosition,
    setLiveLentaPosition,
    hasBody = false
  } = props;
  const [isOpenMenu, onOpenMenu] = React.useState(false)
  const containerClass = classnames(styles.container, className);
  const infoBlockClass = classnames(
    styles["info-block"],
    {
      [styles['has-body']]: hasBody
    }
  )
  return (
    <div className={containerClass}>
      <div className={infoBlockClass}>
        <div className={styles.info}>
          <div className={styles.icon}></div>
          <div className={styles.text}>
            <div className={styles["info-text-footer"]}>2 381</div>
            <div className={styles["info-text-header"]}>Online</div>
          </div>
        </div>

        <Button />
      </div>

      <SegmentedControl round={hasBody} id={hasBody ? 'body-headline' : 'headline'}>
        <SegmentedControlItem 
          vModel={typeLiveLenta} 
          type="user"
          onClick={() => setTypeLiveLenta('user')} 
          iconSrc={iconUser} 
          iconSrcActive={iconUserActive} 
        />
        <SegmentedControlItem 
          vModel={typeLiveLenta} 
          type="box"
          onClick={() => setTypeLiveLenta('box')} 
          iconSrc={iconBox} 
          iconSrcActive={iconBoxActive} 
        />
      </SegmentedControl>
    </div>
  );
};

export default HeadliveLenta;
