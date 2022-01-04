import * as React  from 'react';
import { concatStyles } from '../../../helpers/css-modules';

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

const FormActions = ({ hint, children }) => (
    <div className={styles.container}>
        {hint && <div className={styles.hint}>{hint}</div>}
        <div className={styles.body}>
            {children}
        </div>
    </div>
);
export default FormActions;
