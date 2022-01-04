import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Button from "../../atoms/Button/Button";
import Modal from "../../atoms/Modal/Modal";
import path from "./Path.png";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const ProductAddedSuccessfully = ({
                                      isOpen,
                                      onClose
                                  }) => {
    return (
        <Modal
            title={"Ваш товар успешно добавлен"}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={styles.circle}>
                <img className={styles.path} src={path} alt=""/>
            </div>
            <div className={styles.text}>
                Ваш аккаунт успешно создан, чтобы ваш товар отображался публичном
                доступе вам надо Поднять в топ.
            </div>
            <div className={styles.footer}>
                <Button
                    as={"button"}
                    color={"primary"}
                    size={"medium"}
                    //onClick={onRegister}
                >
                    Поднять в топ
                </Button>
            </div>
        </Modal>
    );
};

export default ProductAddedSuccessfully;
