import {concatStyles} from "../helpers/css-modules";

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import tabletCSS from './tablet.scss';
import desktopCSS from './desktop.scss';

console.log(criticalCSS);

const styles = concatStyles([
    criticalCSS,
    mobileCSS,
    tabletCSS,
    desktopCSS
]);

export default styles;
