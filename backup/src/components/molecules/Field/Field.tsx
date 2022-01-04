import * as React from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const Field = (props) => {
  const { label, id, children, className, ...restProps } = props;
  const classNames = classnames(styles.container, className);
  return (
    <div className={classnames(classNames, styles[props.size])}>
      <input
        {...restProps}
        className={styles.input}
        id={id}
        placeholder={label}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {children && <div className={styles.aside}>{children}</div>}
    </div>
  );
};

export default Field;
