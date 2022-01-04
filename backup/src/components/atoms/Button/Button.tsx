import * as React from "react";
import classnames from "classnames";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface ButtonProps {
    children?: any;
    as: string;
    color: string;
    size: string;
    icon: string;
    bordered: boolean;
    round: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        color = "primary",
        round = false,
        bordered = false,
        size,
        icon,
        children,
        as = "a",
        ...restProps
    } = props;

    const classList = [styles.button, styles[color], styles[size]];

    const className = classnames(
        classList,
        {
            [styles.round]: round,
            [styles.bordered]: bordered,
            [styles.disabled]: restProps.disabled,
            [styles['with-icon']]: icon,
        },
        restProps.className,
    );

    const Component = as || "button";

    return (
        <Component {...restProps} className={className}>
            {children}
            {icon && <img className={styles.icon} src={icon}/>}
        </Component>
    );
};

export default Button;
