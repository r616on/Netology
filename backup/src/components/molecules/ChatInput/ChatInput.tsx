import React from "react";
import {concatStyles} from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import cameraIcon from "./icons/cameraIcon.svg";
import inputIcon from "./icons/inputIcon.svg";
import pageIcon from "./icons/pageIcon.svg";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface ChatInput {
    label?: boolean;
    id?: string;
    disableCamera?: boolean
    disablePage?: boolean
}

const ChatInput: React.FC<ChatInput> = (props) => {
    const {
        label,
        id,
        disableCamera = true,
        disablePage = true
    } = props;
    const classCamera = classnames([styles["control-camera"]], [styles.item]);
    const classPage = classnames([styles["control-page"]], [styles.item]);
    const classInput = classnames([styles["control-input"]], [styles.item]);
    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder={label} id={id}/>
            <div className={styles.control}>
                <div className={classInput}>
                    <img src={inputIcon} alt=""/>
                </div>
                { disablePage && (
                  <div className={classPage}>
                      <img src={pageIcon} alt=""/>
                  </div>
                )}
                { disableCamera && (
                  <div className={classCamera}>
                      <img src={cameraIcon} alt=""/>
                  </div>
                )}
            </div>
        </div>
    );
};

export default ChatInput;
