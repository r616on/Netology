import React, { useState } from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Modal from "../../atoms/Modal/Modal";
import Form from "../../atoms/Form/Form";
import Field from "../../molecules/Field/Field";
import Button from "../../atoms/Button/Button";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const RecoverModal = ({ isOpen, onClose }) => {
  return (
    <Modal title={"Восстановление пароля"} onClose={onClose} isOpen={isOpen}>
      <Form>
        <Field label={"Эл. почта"} type={"email"} />
        <Field label={"Секретное слово (мин 8)"} />
        <div className={styles.btn}>
          <Button as={"button"} color={"primary"} size={"medium"}>
            Восстановить
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default RecoverModal;
