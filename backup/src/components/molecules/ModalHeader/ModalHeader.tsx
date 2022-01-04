import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import RectangleInModal from "../../atoms/RectangleInModal/RectangleInModal";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface ModalHeader {
    firstTitle?: string;
    secondTitle?: string;
    active?: string;
}

const ModalHeader: React.FC<ModalHeader> = (props) => {
    const {
        firstTitle,
        secondTitle,
        active
    } = props;
    let markup;
    if (active === firstTitle) {
        markup = (
            <RectangleInModal size="big">
                <div className={styles.container}>
                    <div className={styles.active}>
                        <div className={styles.content}>{firstTitle}</div>
                        <div className={styles.band}></div>
                    </div>
                    <div className={styles["in-active"]}>
                        <div className={styles.content}>{secondTitle}</div>
                    </div>
                </div>
            </RectangleInModal>
        );
    } else if (active === secondTitle) {
        markup = (
            <RectangleInModal size="big">
                <div className={styles.container}>
                    <div className={styles["in-active"]}>
                        <div className={styles.content}>{firstTitle}</div>
                    </div>
                    <div className={styles.active}>
                        <div className={styles.content}>{secondTitle}</div>
                        <div className={styles.band}></div>
                    </div>
                </div>
            </RectangleInModal>
        );
    }
    return markup
};

export default ModalHeader;
