import React, { Component, ReactElement } from "react";
import cn from "classnames";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
const styles = concatStyles([criticalCSS]);

interface Props {
  children?: any
  index: number,
  max: number
  className?: any,
  doubleMobile?: boolean
}

class SegmentedBlockItem extends Component<Props, {index: number, max: number}> {

  render () {

    return (
      <div className={cn(styles.block, this.props.className)}>
        { this.props.children }
        { this.props.index != this.props.max && (
          <div className={cn(styles.separator, { [styles.right]: this.props.doubleMobile })}>
            <div className={styles.separator__border}>
              <div className={styles.separator__inner} />
            </div>
          </div>
        ) }
        { (this.props.index != this.props.max) && this.props.doubleMobile && (
          <div className={cn(styles.separator, styles.left)}>
            <div className={styles.separator__border}>
              <div className={styles.separator__inner} />
            </div>
          </div>
        ) }
      </div>
    )
  }
}
export default SegmentedBlockItem