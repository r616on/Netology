import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Button from "../../atoms/Button/Button";
import WeaponCard from "../../atoms/WeaponCard/WeaponCard";
import Modal from "../../atoms/Modal/Modal";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const YourWinnings = ({
                          isOpen,
                          onClose
                      }) => {
    return (
        <Modal title={"Ваш выигрыш"} isOpen={isOpen} onClose={onClose}>
            <div className={styles["weapon-card"]}>
                <div className={styles["row-weapon"]}>
                    <WeaponCard color={"red"}/>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.item}>
                    <Button
                        as={"button"}
                        color={"info"}
                        size={"medium"}
                    >
                        Забрать
                    </Button>
                </div>

                <div className={styles.item}>
                    <Button
                        as={"button"}
                        color={"primary"}
                        size={"medium"}
                    >
                        Продать за 999 рублей
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default YourWinnings;
