import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Button from "../../atoms/Button/Button";
import Modal from "../../atoms/Modal/Modal";
import Field from "../../molecules/Field/Field";
import RectangleTitleDescription
    from "../../atoms/RectangleTitleDescription/RectangleTitleDescription";
import Checkbox from "../../molecules/Checkbox/Checkbox";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const AddAccountModal = ({
                             isOpen,
                             onClose
                         }) => {
    return (
        <Modal title={"Добавить аккаунт"} isOpen={isOpen} onClose={onClose}>
            <Field label={"ЗАГОЛОВОК"} type={"text"}/>
            <div className={styles.block}>
                <RectangleTitleDescription title="СЕРВЕР" content="Не выбранно"/>
                <RectangleTitleDescription title="РАНГ" content="Не выбранно"/>
            </div>
            <div className={styles.block2}>
                <RectangleTitleDescription title="СОДЕРЖИМОЕ" content="Не выбранно"/>
                <RectangleTitleDescription title="ТИП АККАУНТА" content="Не выбранно"/>
                <div className={styles.fieldBlock2}>
                    <Field label={"ОПИСАНИЕ (НЕ ОБЯЗАТЕЛЬНО)"} type={"text"}/>
                    <div className={styles.checkBox}>
                        <Checkbox> <span className={styles["checkbox-label"]}>Я согласен с тем что коммисия будет оплаченна из счета совершения сделки</span>
                        </Checkbox>
                    </div>
                </div>
                <div className={styles.text}>
                    Нажимая на кнопке "Продать", я подтверждаю что, я согласен с правилами
                    продажи товаров на сайте.
                </div>
                <div className={styles.footer}>
                    <RectangleTitleDescription title="ЦЕНА " content="75" price={true}/>
                    <Button
                        as={"button"}
                        color={"primary"}
                        size={"medium"}
                        //onClick={onRegister}
                    >
                        ПРОДАТЬ
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default AddAccountModal;
