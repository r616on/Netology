import React, { Component, createRef } from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";
import _ from 'lodash';

import criticalCSS from "./critical.scss";

const styles = concatStyles([criticalCSS]);

interface SegmentedItem {
  id?: string,
  index?: number,
  vModel: string,
  type: string,
  onClick: () => any,
  afterClick?: () => any,
  iconSrc: string,
  iconSrcActive: string
}

class SegmentedControlItem extends Component<SegmentedItem> {

  toggleActive = classnames(
    styles['icon-row__block'],
    styles['active']
  );

  componentDidMount () {
  }

  render () {
    // console.log(this)
    return (
      <li className={styles["icon-row__block"]}>
        <input data-index={this.props.index} id={`${this.props.id}-${this.props.type}`} className={styles.hiddenInput} type="radio" />
        <div className={this.props.vModel == this.props.type ? this.toggleActive : styles['icon-row__block']} onClick={() => {this.props.onClick(); this.props.afterClick()}}>
          <img className={styles["icon-row__icon"]} src={this.props.vModel == this.props.type ? this.props.iconSrcActive : this.props.iconSrc} alt="" />
        </div>
      </li>
    )
  }
}
export default SegmentedControlItem