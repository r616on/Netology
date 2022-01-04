import React, { useState, useEffect } from "react";
import classnames from "classnames";

import Logo from "../../atoms/Logo/Logo";
import TopMenu from "../TopMenu/TopMenu";
import Login from "../Login/Login";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const LandingHeader = ({ onLogin }) => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuState(!isMenuOpen);
  };
  useEffect(() => {
    console.log("dsdsd");
  });
  const toggleClassNames = classnames(styles.toggle, {
    [styles.toggle_active]: isMenuOpen,
  });
  return (
    <header className={classnames("container", styles.container)}>
      <div className={styles.logo}>
        <Logo shine={true} />
      </div>
      <div className={styles.menu}>
        <TopMenu isOpen={isMenuOpen} />
      </div>
      <div className={styles.actions}>
        <Login onLogin={onLogin} />
        <a className={toggleClassNames} onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default LandingHeader;
