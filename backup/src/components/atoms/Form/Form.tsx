import * as React from "react";
import { concatStyles } from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const Form = (props) => (
  <form
    {...props}
    className={classnames(styles.container, styles[props.className])}
  >
    {React.Children.map(props.children, (child) => (
      <div className={styles.item}>{child}</div>
    ))}
  </form>
);

export default Form;
