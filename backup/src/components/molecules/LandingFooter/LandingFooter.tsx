import * as React from 'react';
import classnames from 'classnames';
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import tabletCSS from './tablet.scss';
import desktopCSS from './desktop.scss';

const styles = concatStyles([,
    criticalCSS,
    mobileCSS,
    tabletCSS,
    desktopCSS
]);

const LandingFooter = () => (
    <footer className={classnames('container', styles.container)}>
        <div className={styles.info}>
            DealkGo.com — Крупнейший проект по продажам цифровых товаров.
        </div>
        <div className={styles.copyright}>
            © 2021, Все права защищены.
        </div>
    </footer>
);

export default LandingFooter;
