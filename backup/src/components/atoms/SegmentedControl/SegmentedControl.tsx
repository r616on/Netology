import React, { Component, createRef, cloneElement, ReactChild, ReactComponentElement, ReactNode, ReactElement } from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";
import _ from 'lodash';

import criticalCSS from "./critical.scss";
import SegmentedControlItem from "../SegmentedControlItem/SegmentedControlItem";
import { findDOMNode } from "react-dom";

const styles = concatStyles([criticalCSS]);

interface Props {
  id: string,
  round?: boolean,
  children?: any
}

class SegmentedControl extends Component<Props, {index: number, max: number}> {
  private segmentedControl = createRef<HTMLDivElement>()
  
  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0,
      max: 0,
    };
  }

  toggleActive = classnames(
    styles['icon-row__block'],
    styles['active']
  );

  segmentedControlClass () {
    return classnames(
      styles['icon-row__i'],
      {
        [styles.first]: !this.props.round && this.state.index == 0,
        [styles.last]: !this.props.round && this.state.index == this.state.max,
      }
    );
  }

  private handleIndicatorSize (el: any) {
    this.segmentedControlClass()
    // console.log(el.dataset['index'])
    const _s = this.segmentedControl.current.style;
    const { offsetLeft, offsetWidth } = el.nextElementSibling;
    _s.width = offsetWidth + "px";
    _s.left = offsetLeft + "px";

    const index = el.dataset['index']
    const max = this.props.children.length - 1

    this.setState({ index: index, max: max })
  }
  
  componentDidMount () {
    // document.addEventListener("DOMContentLoaded", () => {
      // console.log('event')
      _.each(this.props.children, (element: ReactElement) => {
        if (element.props.type === element.props.vModel) {
          const elemDOM = document.getElementById(`${this.props.id}-${element.props.type}`)
          this.handleIndicatorSize(elemDOM)
        }
      })
  }

  render () {
    return (
      <div className={(
        classnames(
          styles['icon-row'],
          {
            [styles.round]: this.props.round,
          }
        )
      )}>
        <div ref={this.segmentedControl} className={this.segmentedControlClass()} />
        <ul className={styles["no-margin-padding"]}>
          { ...this.props.children.map(
            (element: ReactElement, index: number) => cloneElement(
              element,
              {
                id: this.props.id,
                key: index,
                index: index,
                afterClick: (fun: any) => {
                  const elemDOM = document.getElementById(`${this.props.id}-${element.props.type}`)
                  this.handleIndicatorSize(elemDOM)
                }
              }
            )
          ) }
        </ul>
      </div>
    )
  }
}
export default SegmentedControl