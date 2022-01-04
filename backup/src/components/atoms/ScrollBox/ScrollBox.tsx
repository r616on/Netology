import React, { useRef, useEffect } from 'react';
import SimpleBar from 'simplebar'
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

const ScrollBox = props => {
    const scrollRef = useRef(null);
    useEffect(() => {
        const element = scrollRef.current;
        const scrollbar = new SimpleBar(element, {
            autoHide: false
        });
        return () => {
            scrollbar.unMount();
        }
    });
    return <div className={styles.container} ref={scrollRef}>
        {props.children}
    </div>
};
export default ScrollBox;
