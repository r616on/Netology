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

const SocialButton = () => (

);

export default SocialButton;
