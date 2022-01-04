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
import FormActions from "../../atoms/FormActions/FormActions";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

// import loginIcon from "../../../images/icons/ic-security-unlocked.svg";

const BalanceReplenishment = ({ isOpen, onClose }) => {
  return (
    <Modal title={"Пополнение баланса"} isOpen={isOpen} onClose={onClose}>
      <div className={styles.conteiner}>
        <div className={styles.input}>
          <Field label={"СУММА"} type={"text"} position={"center"} />
        </div>
        <div className={styles.text}>
          Минимальная сумма для пополнения от 10 рублей.
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          as={"button"}
          color={"primary"}
          size={"medium"}
          //onClick={onRegister}
        >
          Пополинить
        </Button>
      </div>
    </Modal>
  );
};

export default BalanceReplenishment;
