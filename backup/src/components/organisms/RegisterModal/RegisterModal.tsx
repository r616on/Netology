import React, { useState } from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Modal from "../../atoms/Modal/Modal";
import Form from "../../atoms/Form/Form";
import Field from "../../molecules/Field/Field";
import Checkbox from "../../molecules/Checkbox/Checkbox";
import ButtonGroup from "../../molecules/ButtonGroup/ButtonGroup";
import Button from "../../atoms/Button/Button";
import FormActions from "../../atoms/FormActions/FormActions";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

// import loginIcon from "../../../images/icons/ic-security-unlocked.svg";
import loginIcon from "../../../images/icons/ic-security-unlocked_g.svg";

const RegisterModal = ({ isOpen, onLogin, onClose, onRegister }) => {
  return (
    <Modal
      title={"Регистрация"}
      onClose={onClose}
      isOpen={isOpen}
      className={"small"}
    >
      <Form className={"small"}>
        <Field label={"Логин"} size={"small"} />
        <Field label={"Эл. почта"} type={"email"} size={"small"} />
        <Field
          label={"Пароль"}
          type={"password"}
          hint={"Введите пароль"}
          size={"small"}
        />
        <Field label={"Повторите пароль"} type={"password"} size={"small"} />
        <Field label={"Секретное слово (мин 8)"} size={"small"} />
        <Checkbox>
          <div className={styles.confirmation}>
            Я подтверждаю, что ознакомлен с<a href="#">правилами сайта</a>&nbsp;
            и&nbsp;
            <a href="#">пользовательским соглашением</a>
          </div>
        </Checkbox>
        <ButtonGroup size={"small"}>
          <Button as={"button"} color={"primary"} size={"medium-small"}>
            Создать аккаунт
          </Button>
        </ButtonGroup>
        <FormActions hint={"Уже есть аккаунт?"}>
          <Button
            as={"button"}
            color={"primary"}
            size={"medium-small"}
            disabled={true}
            icon={loginIcon}
          >
            Войти
          </Button>
        </FormActions>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
