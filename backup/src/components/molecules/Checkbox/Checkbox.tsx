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

import check from '../../../images/icons/check.svg';

const Checkbox = props => {
    const {
        label,
        children,
        className,
        ...restProps
    } = props;
    const classNames = classnames(
        styles.container,
        className
    );
    return (
        <label className={classNames}>
            <input {...restProps} className={styles.input} type={'checkbox'}/>
            <span className={styles.control}>
                {<img src={check} className={styles.icon} alt=""/>}
            </span>
            {
                label && <span className={styles.label}>
                    {label}
                </span>
            }
            <span className={styles.inner}>
                {children}
            </span>
        </label>
    );
};

export default Checkbox;
