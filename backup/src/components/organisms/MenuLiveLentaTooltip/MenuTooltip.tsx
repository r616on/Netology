import * as React from "react";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import { concatStyles } from "../../../helpers/css-modules";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { onMenu } from "../../../redux/menuLiveLenta/menuLiveLentaSlice";

const styles = concatStyles([criticalCSS]);

const MenuTooltip: React.FC<any> = (props) => {
  const isOpen = useAppSelector((state) => state.menuLiveLenta.open)
  const posX = useAppSelector((state) => state.menuLiveLenta.x)
  const posY = useAppSelector((state) => state.menuLiveLenta.y)
  const side = useAppSelector((state) => state.menuLiveLenta.side)
  const front = useAppSelector((state) => state.menuLiveLenta.front)
  const frontPos = useAppSelector((state) => state.menuLiveLenta.frontPos)

  const dispatch = useAppDispatch()

  const changePosition = (text: string, revert: boolean = false) => {
    if (revert) {
      if (text == 'left') text = 'right'
      else if (text == 'right') text = 'left'
      else if (text == 'top') text = 'bottom'
      else if (text == 'bottom') text = 'top'
    }

    return text[0].toUpperCase() + text.slice(1)
  }

  if (!isOpen) return null;

  return (
    <div className={styles.info_tooltip} style={{ top: posX, left: posY, [`margin${changePosition(side, true)}`]: '20px', [`margin${changePosition(front)}`]: `${frontPos}px` }}>
      <div className={styles.info_tooltip__corner}>
        {props.children}
      </div>
    </div>
  )
}
export default MenuTooltip;