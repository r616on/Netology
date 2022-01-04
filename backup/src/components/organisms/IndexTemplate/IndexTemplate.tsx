import React, { Children, useState } from "react";
import classnames from 'classnames';
import { concatStyles } from "../../../helpers/css-modules";

import sidebarItem from "./sidebarItem.json";
import itemliveLentaArr from "./itemliveLentaArr.json";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import burger from "./img/burger.png";
import logo from "./img/logo.png";

import StatisticsBlock from "../../molecules/StatisticsBlock/StatisticsBlock";
import ItemSidebar from "../../atoms/ItemSidebar/ItemSidebar";
import ItemliveLenta from "../../atoms/ItemliveLenta/ItemliveLenta";
import HeadliveLenta from "../../atoms/HeadliveLenta/HeadliveLenta";

import MenuTooltip from "../../organisms/MenuLiveLentaTooltip/MenuTooltip";
import MenuButton from "../../organisms/MenuLiveLentaTooltip/MenuButton";

import IconChangePos from './img/change-pos-live-lenta.svg'
import IconHide from './img/hide-live-lenta.svg'
import Index3Header from "../../molecules/Index3Header/Index3Header";
import LiveLenta from "../../organisms/HomeBody/LiveLenta/LiveLenta";
import Index3Footer from "../../molecules/Index3Footer/Index3Footer";

import CommonFooterIconDiscord from './img/common_footer/discord.svg';
import CommonFooterIconInstagram from './img/common_footer/instagram.svg';
import CommonFooterIconVk from './img/common_footer/vk.svg';
import CommonFooterIconYoutube from './img/common_footer/youtube.svg';
import { Link } from "react-router-dom";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const IndexTemplate = ({ children }) => {
  const [typeOfLiveLenta, setTypeOfLiveLenta] = useState('box');
  const [isSidebarVisible, setSidebarVisible] = useState(localStorage.getItem('sidebarHide') == 'true');
  const handleSidebarVisible = () => {
    const bool = !isSidebarVisible
    setSidebarVisible(bool)
    localStorage.setItem('sidebarHide', bool)
  }

  const [isLiveLentaVisible, setLiveLentaVisible] = useState(localStorage.getItem('livelentaHide') == 'true');
  const handleLiveLentaVisible = () => {
    const bool = !isLiveLentaVisible
    setLiveLentaVisible(bool)
    localStorage.setItem('livelentaHide', bool)
  }

  let defaultLiveLentaPos = localStorage.getItem('livelentaPosition') ?? 'horizontal'

  const [isLiveLentaPosition, setLiveLentaPosition] = useState(defaultLiveLentaPos);
  const handleLiveLentaPosition = (position) => {
    setLiveLentaPosition(position)
    localStorage.setItem('livelentaPosition', position)
  }

  const userStatistics = "486 532", goodsStatistics = "18 192 436"

  let sidebarButtons = (
    <>
      {...sidebarItem.map((item: ItemSidebar, index: number) => (
        <ItemSidebar
          isFirst={index === 0}
          isLast={index === sidebarItem.length - 1}
          to={item.to}
          key={index}
          type={item.type}
          title={item.title}
          active={item.active || false}
        ></ItemSidebar>
      ))}
    </>
  )
  const classSidebar = classnames(
    styles.sidebar,
    {
      [styles['no-sidebar']]: !isSidebarVisible
    }
  )
  const classContainer = classnames(
    styles.container,
    {
      woSid: !isSidebarVisible
    }
  )
  const liveLentaContainer = classnames(
    styles["live-lenta"],
    {
      [styles.no_livelenta]: isLiveLentaPosition == 'horizontal' || !isLiveLentaVisible
    }
  )
  return (
    <>
      <div className={classContainer}>
        <div className={styles["row"]}>
          <div className={classSidebar} style={{ position: 'fixed' }}>
            <div className={styles["sidebar-header"]}>
              <div className={styles["sidebar-logo"]}>
                <Link to="/">
                  <img className={styles["sidebar-img"]} src={logo} alt="" />
                </Link>
              </div>

              <div className={styles["sidebar-burger"]} onClick={handleSidebarVisible}>
                <img className={styles["sidebar-img"]} src={burger} alt=""  />
              </div>
            </div>

            <StatisticsBlock user={userStatistics} goods={goodsStatistics} />
            { sidebarButtons }
            <div className={styles.filled} />
            
          </div>
          <div className={classSidebar}>
            <Index3Footer className={styles.sticky_footer} />
          </div>
          <div className={liveLentaContainer}>
            <HeadliveLenta
              typeLiveLenta={typeOfLiveLenta}
              setTypeLiveLenta={setTypeOfLiveLenta}
              isLiveLentaPosition={isLiveLentaPosition}
              setLiveLentaPosition={setLiveLentaPosition}
            ></HeadliveLenta>
            <div className={styles.overflow}>
              {...itemliveLentaArr.map((item: ItemliveLenta, index: number) => (
                <ItemliveLenta
                  typeLiveLenta={typeOfLiveLenta}
                  isFirst={index === 0}
                  isLast={index === itemliveLentaArr.length - 1}
                  to={item.to}
                  key={index}
                  type={item.type}
                  title={item.title}
                  active={item.active || false}
                ></ItemliveLenta>
              ))}
              {/* <div className={styles["live-lenta-shadow"]} /> */}
            </div>
          </div>
          <div className={styles["body"]}>
            <Index3Header
              buttons={sidebarButtons}
              isSidebarVisible={isSidebarVisible}
              handleSidebarVisible={handleSidebarVisible}
              isLiveLentaVisible={isLiveLentaVisible}
              setLiveLentaVisible={handleLiveLentaVisible}
            />
            <div className={styles.block_statictics}>
              <StatisticsBlock user={userStatistics} goods={goodsStatistics} />
            </div>
            <LiveLenta
              typeLiveLenta={typeOfLiveLenta}
              setTypeLiveLenta={setTypeOfLiveLenta}
              isLiveLentaPosition={isLiveLentaPosition}
              setLiveLentaPosition={setLiveLentaPosition}
              isLiveLentaVisible={isLiveLentaVisible}
              setLiveLentaVisible={handleLiveLentaVisible}
            />
            
            { children }

            <div className={styles.bottom_footer}>
              <Index3Footer />
            </div>
          </div>
        </div>
        <MenuTooltip>
          <MenuButton
            as="button"
            icon={IconChangePos} 
            onClick={() => {
              setLiveLentaPosition(isLiveLentaPosition == 'horizontal' ? 'vertical' : 'horizontal')
            }}
          >
            Сменить позицию
          </MenuButton>
          <MenuButton
            as="button"
            icon={IconHide}
            onClick={() => {
              handleLiveLentaVisible(!isSidebarVisible)
            }}
          >
            Свернуть ленту
          </MenuButton>
        </MenuTooltip>
        <div className={styles.common_footer}>
          <div className={styles.common_footer_left}>
            <div className={styles.common_footer_right}>
              <img src={CommonFooterIconInstagram} />
              <img src={CommonFooterIconDiscord} />
              <img src={CommonFooterIconVk} />
              <img src={CommonFooterIconYoutube} />
            </div>
            <ul className={styles.common_footer_links}>
              <li><a href="/content/assets/user-aggrement.pdf" target="_blank">Пользовательское соглашение</a></li> 
              <li ><a href="/contacts">Контакты</a></li>
              <li><a href="/faq">Частые вопросы</a></li>
            </ul>
            <div>
              <div className={styles.common_footer_copyright}>
                <a href="/">DealkGo.com</a> — Крупнейший проект по продажам цифровых товаров.
                <br />
                © 2020, Все права защищены.        
              </div>
            </div>
          </div> 
        </div>
      </div>
 
    </>
  );
};

export default IndexTemplate;
