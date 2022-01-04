import * as React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import RectangleTitleDescription
    from "../../atoms/RectangleTitleDescription/RectangleTitleDescription";
import WeaponIcon from "../../../images/icons/Ar20_gold01_1.svg";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface InputProd {
    title: string;
    content?: string;
}

const InputProd: React.FC<InputProd> = (props) => {
    const {
        title,
        content
    } = props;

    return (
        <RectangleTitleDescription title={title}>
            <div className={styles.content}>
                <img src={WeaponIcon}/>
                <div className={styles.text}>{content}</div>
            </div>
        </RectangleTitleDescription>
    );
};
export default InputProd;
