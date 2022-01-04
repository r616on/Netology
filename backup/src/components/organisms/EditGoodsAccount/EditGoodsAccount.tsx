import React from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Modal from "../../atoms/Modal/Modal";
import Field from "../../molecules/Field/Field";
import RectangleTitleDescription from "../../atoms/RectangleTitleDescription/RectangleTitleDescription";
import Button from "../../atoms/Button/Button";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const EditGoodsAccount = ({ isOpen, onClose }) => {
  return (
    <Modal title={"Редактирование товара"} isOpen={isOpen} onClose={onClose}>
      <div className={styles.block}>
        <RectangleTitleDescription
          title="НАЗВАНИЕ ТОВАРА"
          content="Аккаунт Warface"
          size="full"
          noIcon={true}
        />

        <RectangleTitleDescription title="РАНГ" content="52" />

        <RectangleTitleDescription
          title="СОДЕРЖИМОЕ"
          content="Digle, GunMood"
          noIcon={true}
        />

        <RectangleTitleDescription title="СЕРВЕР" content="Альфа" />

        <RectangleTitleDescription title="ТИП АККАУНТА" content="Личный" />
      </div>
      <div className={styles["block-two"]}>
        <Field label={"ОПИСАНИЕ (НЕ ОБЯЗАТЕЛЬНО)"} type={"text"} />

        <RectangleTitleDescription
          title="ПУБЛИЧНЫЙ ДОСТУП"
          content="Отключен"
        />

        <RectangleTitleDescription
          title="ЦЕНА ЗА 1 ШТ."
          content="2000"
          price={true}
        />
        <div className={styles.footer}>
          <Button as={"button"} color={"primary"} size={"medium-mini"}>
            Сохранить изменения
          </Button>

          <Button as={"button"} color={"red"} size={"medium-mini"}>
            Удалить товар
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditGoodsAccount;
