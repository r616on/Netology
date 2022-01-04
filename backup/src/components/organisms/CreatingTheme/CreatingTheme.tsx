import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Modal from "../../atoms/Modal/Modal";
import Checkbox from "../../molecules/Checkbox/Checkbox";
import RectangleTitleDescription
    from "../../atoms/RectangleTitleDescription/RectangleTitleDescription";
import Button from "../../atoms/Button/Button";
import icon from "./page.png";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const CreatingTheme = ({
                           isOpen,
                           onClose
                       }) => {
    return (
        <Modal title={"Создание темы"} isOpen={isOpen} onClose={onClose}>
            <div className={styles.block}>
                <RectangleTitleDescription
                    title="ЗАГОЛОВОК ТЕМЫ"
                    content="WARFACE ONLINE"
                    size="full"
                    noIcon={true}
                />
            </div>
            <div className={styles["input-block"]}>
                <div className={styles.title}>ОПИСАНИЕ ТЕМЫ</div>
                <div className={styles["input-row"]}>
                    <input
                        className={styles["input-input"]}
                        type={"text"}
                        placeholder={"Введите сообщение..."}
                    />
                    <img className={styles["input-icon"]} src={icon} alt=""/>
                </div>
            </div>

            <div className={styles.header}>Продвижение</div>

            <div className={styles.checkBox}>
                <div className={styles.checkItem}>
                    <Checkbox>
                        <div className={styles.checkText}>
                            Поднять тему в топ за <span className={styles.bold}> 50 </span>
                            рублей
                        </div>
                    </Checkbox>
                </div>
                <div className={styles.checkItem}>
                    <Checkbox>
                        <div className={styles.checkText}>
                            Закрепить тему в топ за <span className={styles.bold}> 80 </span>
                            рублей
                        </div>
                    </Checkbox>
                </div>
                <div className={styles.checkItem}>
                    <Checkbox>
                        <div className={styles.checkText}>
                            Выделить цветом <span className={styles.color}></span> за{" "}
                            <span className={styles.bold}> 60 </span> рублей
                        </div>
                    </Checkbox>
                </div>
            </div>
            <div className={styles.footer}>
                <Button
                    as={"button"}
                    color={"primary"}
                    size={"medium"}
                    //onClick={onRegister}
                >
                    Создать тему
                </Button>
            </div>
        </Modal>
    );
};

export default CreatingTheme;
