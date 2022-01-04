import React, { Component, ReactElement, cloneElement } from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
const styles = concatStyles([criticalCSS]);

interface Props {
  doubleMobile?: boolean,
  children?: any
}

class SegmentedBlock extends Component<Props, {index: number, max: number}> {

  render () {
    return (
      <div className={styles.row}>
        { ...this.props.children.map(
         (element: ReactElement, index: number) => cloneElement(
          element,
          {
            doubleMobile: this.props.doubleMobile,
            key: index,
            index: index,
            max: this.props.children.length - 1
          }
         )
        ) }
      </div>
    )
  }
}
export default SegmentedBlock