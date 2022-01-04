import * as React from 'react';
import classnames from 'classnames';
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import tabletCSS from './tablet.scss';
import desktopCSS from './desktop.scss';

const styles = concatStyles([
    criticalCSS,
    mobileCSS,
    tabletCSS,
    desktopCSS
]);

import icon from './star.svg';

const Advantage = ({ title, children, className }) => {
    const classNames = classnames(
        styles.container,
        className
    );
    return (
        <div className={classNames}>
            <div className={styles['icon-group']}>
                <img src={icon} className={styles.icon} alt=""/>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <div className={styles.text}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Advantage;
