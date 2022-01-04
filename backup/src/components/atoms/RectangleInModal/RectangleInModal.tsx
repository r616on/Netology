import * as React from "react";
import { concatStyles } from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface RectangleInModal {
  size?: string;
}
const RectangleInModal: React.FC<RectangleInModal> = (props) => {
  const { size } = props;
  const classList = [styles.container, styles[size]];
  const className = classnames(classList);
  return <div className={className}>{props.children}</div>;
};

export default RectangleInModal;
