import * as React from "react";
import {concatStyles} from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import weapon from "./uzkon12_gold 1.png";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface WeaponCard {
    color?: string;
}

const WeaponCard: React.FC<WeaponCard> = (props) => {
    const classStatus = classnames([styles.status], [styles[props.color]]);

    return (
        <div className={styles.conteiner}>
            <div className={classStatus}></div>
            <div className={styles.weapon}>
                <img className={styles.img} src={weapon} alt=""/>
            </div>
            <div className={styles.text}>Золотой Uzkon UNG-12</div>
        </div>
    );
};
export default WeaponCard;
