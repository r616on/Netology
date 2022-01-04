import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Modal from "../../atoms/Modal/Modal";
import Field from "../../molecules/Field/Field";
import RectangleTitleDescription
    from "../../atoms/RectangleTitleDescription/RectangleTitleDescription";
import ModalHeader from "../../molecules/ModalHeader/ModalHeader";
import Button from "../../atoms/Button/Button";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const AddGoodsSellAccount = ({
                                 isOpen,
                                 onClose
                             }) => {
    return (
        <Modal title={"Добавление товара"} isOpen={isOpen} onClose={onClose}>
            <ModalHeader
                firstTitle={"Продать Аккаунт"}
                secondTitle={"Продать Пин-код"}
                active={"Продать Аккаунт"}
            />
            <div className={styles.block}>
                <RectangleTitleDescription title="РАНГ" content="52"/>
                <RectangleTitleDescription title="СОДЕРЖИМОЕ" content="Digle, GunMood"
                                           noIcon={true}/>
            </div>
            <div className={styles["block-two"]}>
                <RectangleTitleDescription title="СЕРВЕР" content="Альфа"/>
                <RectangleTitleDescription title="ТИП АККАУНТА" content="Личный"/>
                <div className={styles["field-block-two"]}>
                    <Field label={"ОПИСАНИЕ (НЕ ОБЯЗАТЕЛЬНО)"} type={"text"}/>
                </div>
                <div className={styles.footer}>
                    <div className={styles.rect}>
                        <RectangleTitleDescription title="ЦЕНА ЗА 1 ШТ." content={"2000"}
                                                   price={true}/>
                    </div>
                    <div className={styles.btnFooter}>
                        <Button
                            as={"button"}
                            color={"primary"}
                            size={"medium"}
                        >
                            Добавить товар
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddGoodsSellAccount;
