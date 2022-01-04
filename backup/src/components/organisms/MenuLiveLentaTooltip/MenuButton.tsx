import * as React from "react";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import { concatStyles } from "../../../helpers/css-modules";

const styles = concatStyles([criticalCSS]);

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { onMenu } from "../../../redux/menuLiveLenta/menuLiveLentaSlice";

interface MenuButton {
  children?: any,
  as?: string,
  icon?: string,
  href?: string
}

const MenuButton: React.FC<MenuButton> = (props) => {
  const {
      icon,
      children,
      as='a',
      ...restProps
  } = props;

  const isOpen = useAppSelector((state) => state.menuLiveLenta.open)
  const dispatch = useAppDispatch()

  const Component = as || 'button';

  const buttonClick = restProps.onClick

  const dispatchOnClick = () => {
    if (buttonClick) {
      buttonClick()
    }
    dispatch(onMenu({ open: false }))
  }

  if (buttonClick) {
    delete restProps.onClick
  }

  return (
    <Component {...restProps} onClick={dispatchOnClick} className={styles.info_tooltip__button}>
      {icon && <img className={styles.icon} src={icon}/>}
      {children}
    </Component>
  )
}
export default MenuButton;