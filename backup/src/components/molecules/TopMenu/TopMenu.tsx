import React, { useLayoutEffect, useEffect, useState } from "react";
import classnames from "classnames";
import TopMenuLink from "../../atoms/TopMenuLink/TopMenuLink";
import topMenuItems from "./data.json";
import { concatStyles } from "../../../helpers/css-modules";
import useComponentVisible from "../../hooks/useComponentVisible";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface TopMenuProps {
  isOpen?: boolean;
  isDark?: boolean;
  isHome?: boolean;
}

interface TopMenuItem {
  title: string;
  route: string;
}
function useWindowSize() {
  const [visibleElements, setVisibleElements] = useState();
  function size() {
    const clientWidth = document.getElementById(
      "Menu-custom-Container"
    ).clientWidth;
    if (clientWidth > 746) {
      return 8;
    } else if (clientWidth > 720 && clientWidth < 746) {
      return 7;
    } else if (clientWidth > 630 && clientWidth < 720) {
      return 6;
    } else if (clientWidth > 540 && clientWidth < 630) {
      return 5;
    } else if (clientWidth > 455 && clientWidth < 540) {
      return 4;
    } else if (clientWidth > 340 && clientWidth < 455) {
      return 3;
    } else if (clientWidth > 200 && clientWidth < 340) {
      return 2;
    }
  }
  function updateSize() {
    setVisibleElements(size());
  }
  useEffect(() => {
    setVisibleElements(size());
  });
  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return visibleElements;
}

const TopMenu: React.FC<TopMenuProps> = ({ isOpen, isDark, buttons }) => {
  const classList = classnames(styles.container, {
    [styles.open]: isOpen,
    [styles.dark]: isDark,
    [styles.home]: isDark,
  });

  const customContainerClasses = classnames(styles["custom-сontainer"], {
    [styles.home]: isDark,
  });

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const visibleElements = useWindowSize();

  return (
    <div className={styles.row}>
      <nav className={classList}>
        {...topMenuItems.map((item: TopMenuItem, index: number) => (
          <TopMenuLink
            className={styles.item}
            isFirst={index === 0}
            isLast={index === topMenuItems.length - 1}
            to={item.route}
            key={index}
            isDark={isDark}
          >
            {item.title}
          </TopMenuLink>
        ))}
        {buttons && <div className={styles.buttons_mobile}>{buttons}</div>}
      </nav>

      <nav
        className={customContainerClasses}
        id="Menu-custom-Container"
        ref={ref}
      >
        {...topMenuItems.map(
          (item: TopMenuItem, index: number) =>
            index < visibleElements && (
              <TopMenuLink
                className={styles.item}
                isFirst={index === 0}
                isLast={index === topMenuItems.length - 1}
                to={item.route}
                key={index}
                isDark={isDark}
              >
                {item.title}
              </TopMenuLink>
            )
        )}
        {visibleElements < topMenuItems.length && (
          <div className={styles.item}>
            <div
              className={styles["btn-burger"]}
              onClick={() =>
                isComponentVisible
                  ? setIsComponentVisible(false)
                  : setIsComponentVisible(true)
              }
            >
              <span className={styles["btn-burger-span"]}></span>
              <span className={styles["btn-burger-span"]}></span>
              <span className={styles["btn-burger-span"]}></span>
            </div>

            {isComponentVisible && (
              <div className={styles.dropdown}>
                {...topMenuItems.map(
                  (item: TopMenuItem, index: number) =>
                    index > visibleElements - 1 && (
                      <TopMenuLink
                        className={styles["item-dropped"]}
                        isFirst={index === 0}
                        isLast={index === topMenuItems.length - 1}
                        to={item.route}
                        key={index}
                        isDark={isDark}
                      >
                        {item.title}
                      </TopMenuLink>
                    )
                )}
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default TopMenu;
