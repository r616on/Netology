import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Modal from "../../atoms/Modal/Modal";
import RectangleTitleDescription
    from "../../atoms/RectangleTitleDescription/RectangleTitleDescription";
import Field from "../../molecules/Field/Field";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../molecules/Checkbox/Checkbox";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const EnterMoney = ({
                        isOpen,
                        onClose
                    }) => {
    return (
        <Modal title={"Вывод средств"} isOpen={isOpen} onClose={onClose}>
            <div className={styles.conteiner}>
                <div className={styles.input}>
                    <Field label={"СУММА"} type={"text"} position={"center"}/>
                </div>
                <div className={styles.text}>
                    Минимальная сумма для пополнения от 50 рублей.
                </div>
                <RectangleTitleDescription
                    title="СПОСОБ ВЫВОДА"
                    content="Банковская карта VISA/MASTERCARD"
                    size="full"
                    noIcon={true}
                />
            </div>
            <div className={styles.inputRow}>
                <div className={styles.inputText}>РЕКВЕЗИТЫ ДЛЯ ВЫВОДА</div>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={"РЕКВЕЗИТЫ ДЛЯ ВЫВОДА"}
                    value={"4149 4991 1487 7723"}
                />
            </div>
            <div className={styles.check}>
                <Checkbox
                    label={"Запомнить мои реквезиты для последующего вывода средств."}
                    check={true}
                />
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

export default EnterMoney;
