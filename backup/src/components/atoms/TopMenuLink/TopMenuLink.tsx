import { NavLink } from 'react-router-dom';
import * as React from "react";
import classnames from 'classnames';

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import tabletCSS from './tablet.scss';
import desktopCSS from './desktop.scss';

const styles = Object.assign({},
    criticalCSS,
    mobileCSS,
    tabletCSS,
    desktopCSS
);

const TopMenuLink = ({ to, children, isFirst, className, isDark }) => (
    <NavLink
        className={
            classnames(
                className,
                styles.link,
                {
                    [styles.first]: isFirst,
                    [styles.dark]: isDark
                }
            )
        }
        activeClassName={styles.active}
        to={to}
        exact={true}
    >
        {children}
    </NavLink>
);

export default TopMenuLink;
