import * as React from "react";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import desktopCSS from "./desktop.scss";

import { concatStyles } from "../../../helpers/css-modules";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { onMenu } from "../../../redux/menuLiveLenta/menuLiveLentaSlice";

const styles = concatStyles([criticalCSS, mobileCSS, desktopCSS]);

const Button: React.FC<any> = (props) => {
  const isOpen = useAppSelector((state) => state.menuLiveLenta.open)
  const dispatch = useAppDispatch()

  const dispatchOnMenu = (e: any) => {
    let elem = e.target
    if (elem.children.length == 0) {
      elem = elem.offsetParent
    }
    // console.log(elem.children.length, elem)
    const coords = elem.getBoundingClientRect();

    // const marginTop = coords.height/2
    // const posCenterX = coords.top + (marginTop / 2)
    // const posCenterY = coords.left + (coords.width/2)
    const marginTop = coords.height / 4 * -1
    const posCenterX = coords.top + (coords.height / 2)
    const posCenterY = coords.left + (coords.width/2)
    // console.log(coords)
    dispatch(onMenu({open: !isOpen , x: posCenterX, y: posCenterY, side: 'right', frontPos: marginTop }))
  }

  return (
    <div className={styles["info-block-icon-row"]} onClick={dispatchOnMenu}>
      <div className={styles["info-block-icon"]}></div>
      <div className={styles["info-block-icon"]}></div>
      <div className={styles["info-block-icon"]}></div>
    </div>
  )
}
export default Button;