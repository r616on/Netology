import React from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Modal from "../../atoms/Modal/Modal";
import FAQMessage from "../../atoms/FAQMessage/FAQMessage";
import ModalHeader from "../../molecules/ModalHeader/ModalHeader";
import faqMessageItems from "./faqMessageItems.json";
const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const FastAccessFAQ = ({ isOpen, onClose }) => {
  return (
    <Modal title={"Быстрый доступ"} isOpen={isOpen} onClose={onClose}>
      <ModalHeader
        firstTitle={"Чат с поддержкой"}
        secondTitle={"Частые вопросы"}
        active={"Частые вопросы"}
      />
      <div className={styles.row}>
        {...faqMessageItems.map((item: FAQMessage, index: number) => (
          <FAQMessage key={index} text={item.text} />
        ))}
      </div>
    </Modal>
  );
};

export default FastAccessFAQ;
