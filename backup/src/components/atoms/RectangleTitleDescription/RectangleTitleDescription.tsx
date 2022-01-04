import * as React from "react";
import {concatStyles} from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import arrowIcon from "../../../images/icons/Arrow_8.png";
import priceIcon from "../../../images/icons/₽.png";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface RectangleTitleDescription {
    title: string;
    content?: string;
    price?: boolean;
    noIcon?: boolean;
    size?: string;
}

const RectangleTitleDescription: React.FC<RectangleTitleDescription> = (props) => {
    const {
        title,
        content,
        price,
        noIcon,
        size
    } = props;

    let icon = (price === true) ? priceIcon : arrowIcon;

    const classList = [styles.container, styles[size]];
    const className = classnames(classList);
    let markup: any;
    if (noIcon) {
        markup = (
            <div className={className}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.body}>
                    <div className={styles.content}>
                        {props.content} {props.children}
                    </div>
                </div>
            </div>
        );
    } else {
        markup = (
            <div className={className}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.body}>
                    <div className={styles.content}>
                        {props.content} {props.children}
                    </div>
                    <div className={styles.arrow}>
                        <img className={styles.icon} src={icon}/>
                    </div>
                </div>
            </div>
        );
    }
    return markup
};
export default RectangleTitleDescription;
