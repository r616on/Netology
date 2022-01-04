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
import InputProd from "../../molecules/InputProd/InputProd";
import RectProdDuble from "../../atoms/RectProdDuble/RectProdDuble";
import ModalHeader from "../../molecules/ModalHeader/ModalHeader";
import xIcon from "../../../images/icons/3-layers.svg";
import Button from "../../atoms/Button/Button";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const AddGoodsSellPin = ({
                             isOpen,
                             onClose
                         }) => {
    return (
        <Modal title={"Добавление товара"} isOpen={isOpen} onClose={onClose}>
            <ModalHeader
                firstTitle={"Продать Аккаунт"}
                secondTitle={"Продать Пин-код"}
                active={"Продать Пин-код"}
            />
            <div className={styles.block}>
                <RectangleTitleDescription title="ТИП ПИН-КОДА" content="Снаряжение"/>
                <InputProd title="СОДЕРЖИМОЕ" content="Makmilan Gr-30"/>
            </div>
            <div className={styles["block-two"]}>
                <RectangleTitleDescription title="СРОК" content="Навсегда"/>
                <RectProdDuble content="25"/>
                <div className={styles["field-block-two"]}>
                    <Field label={"ОПИСАНИЕ (НЕ ОБЯЗАТЕЛЬНО)"} type={"text"}/>
                </div>
                <div className={styles.item}>
                    <RectangleTitleDescription title="ТИП ПИН-КОДА" content="Снаряжение"/>
                </div>
                <div className={styles.item}>
                    <InputProd title="СОДЕРЖИМОЕ" content="Makmilan Gr-30"/>
                </div>
                <div className={styles.item}>
                    <RectangleTitleDescription title="СРОК" content="Навсегда"/>
                </div>
                <div className={styles.item}>
                    <RectangleTitleDescription title="КОЛ-ВО" content="25"/>
                </div>
                <div className={styles.x}>
                    <img src={xIcon} alt=""/>
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

export default AddGoodsSellPin;
