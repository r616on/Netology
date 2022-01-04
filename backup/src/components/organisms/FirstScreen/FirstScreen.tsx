import * as React from "react";
import classnames from "classnames";
import { concatStyles } from "../../../helpers/css-modules";

import Advantages from "../Advantages/Advantages";
import Button from "../../atoms/Button/Button";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const FirstScreen = ({ onRegister }) => {
    return (
        <section className={classnames('container', styles.container)}>
            <div className={styles.info}>
                <h2 className={styles.title}>
                    DealkGo.com — совершайте<br/> безопасную сделку сейчас !
                </h2>
                <div className={styles.text}>
                    Присоединяйтесь к нам прямо сейчас, и получите<br/> 15 бонусов на счёт при первом пополении своего баланса.
                </div>
                <div className={styles.actions}>
                    <Button
                        as={'a'}
                        color={'secondary'}
                        size={'big'}
                        onClick={onRegister}
                    >
                        Присоединиться
                    </Button>
                </div>
            </div>
            <div className={styles.advantages}>
                <Advantages/>
            </div>
        </section>
    )
};

export default FirstScreen
