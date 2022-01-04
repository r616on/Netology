import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

import closeIcon from "../../../images/icons/ic-actions-close-simple.svg";

const Modal = ({ isOpen, onClose, children, title, className, needContainer = true }) => {
  if (isOpen) {
    // document.body.classList.add('no-scroll');
  }
  const classList = classnames(styles[className], {
    [styles.open]: isOpen,
    [styles.container]: needContainer,
    [styles.disableFixed]: !needContainer
  });
  const onModalClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onModalClose(e);
  };
  const onModalClose = (e) => {
    // document.body.classList.remove('no-scroll');
    onClose(e);
  };
  const modalRef = useRef(null);
  const onScroll = (e) => {
    const { current } = modalRef;
    const { target } = e;
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <div className={classList} onClick={onModalClick} ref={modalRef}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <button
            className={styles["close-button"]}
            type={"button"}
            onClick={onModalClose}
          >
            <img src={closeIcon} className={styles["close-icon"]} alt="" />
          </button>
          <div className={styles.header}>{title}</div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
