import React, {useEffect, useState} from 'react';
import breakpoints from '../../../config/breakpoints';

import classnames from 'classnames';
import {concatStyles} from "../../../helpers/css-modules";

import AdvantagesList from '../../molecules/AdvantagesList/AdvantagesList';
import ScrollBox from '../../atoms/ScrollBox/ScrollBox';

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

const Advantages = () => {
    return (
        <aside className={styles.container}>
            <ScrollBox className={styles.list}>
                <AdvantagesList/>
            </ScrollBox>
            <div className={styles.info}>
                <h3 className={styles.title}>
                    Почему мы?
                </h3>
            </div>
        </aside>
    );
};
export default Advantages;
