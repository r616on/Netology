import React, { useState } from "react";
import classnames from 'classnames';
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Banner from "../../organisms/HomeBody/Banner/Banner";
import TitleBlock from "../../atoms/TitleBlock/TitleBlock";
import CaseBlock from "../../atoms/CaseBlock/CaseBlock";

import CaseBackground1 from "./img/cases/background-1.png"
import CaseBackground2 from "./img/cases/background-2.png"
import CaseBackground3 from "./img/cases/background-3.png"
import CaseCase1 from "./img/cases/case-1.png"
import CaseCase2 from "./img/cases/case-2.png"
import CaseCase3 from "./img/cases/case-3.png"
import MarketBlock from "../../atoms/MarketBlock/MarketBlock";

import WeaponImg from './img/weapon.png';
import Index3Footer from "../../molecules/Index3Footer/Index3Footer";


import IndexTemplate from "../../organisms/IndexTemplate/IndexTemplate";
// import logo from "./img/logo.png";
const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const Index3 = () => {
  return (
    <IndexTemplate>
        <Banner />
        <TitleBlock label="Популярные кейсы" />
        <div className={styles.cases}>
          <CaseBlock background={CaseBackground1} caseImg={CaseCase1} label="FARM" cost="1990B" />
          <CaseBlock background={CaseBackground2} caseImg={CaseCase2} label="YELLO" cost="1990B" />
          <CaseBlock background={CaseBackground3} caseImg={CaseCase3} label="ROSE" cost="1990B" />
        </div>
        <div className={styles.center}>
          <div className={styles.tab_block}>
            <div className={styles.tab_link}>
              Топ Аккаунтов
            </div>
            <div className={(classnames(styles.tab_link, styles.active))}>
              Топ Пин-кодов
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.inner_grid}>
            { [1,2,3,4,5,6,7,8].map(() => (
              <MarketBlock marketImg={WeaponImg} />
            ))}
          </div>
        </div>
    </IndexTemplate>
  );
};

export default Index3;
