import * as React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import AvatarUserAndSupportChat
    from "../../atoms/AvatarUserAndSupportChat/AvatarUserAndSupportChat";
import icon from "./icon.png";
import check from "./check.png";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface UserCard {
    avatar?: string;
    name?: string;
    currency?: string;
    money?: string;
}

const UserCard: React.FC<UserCard> = (props) => {
    const {
        avatar,
        name,
        currency,
        money
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.badges}>
                <div className={styles.green}>{currency}</div>
                <div className={styles.money}>
                    <div className={styles.text}>{money}</div>
                    <div className={styles.circle}>
                        <img className={styles.icon} src={icon} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.avatar}>
                    <AvatarUserAndSupportChat user={true}/>
                </div>
                <div className={styles.name}>{name}</div>
                <div className={styles.check}>
                    <img src={check} alt=""/>
                </div>
            </div>
        </div>
    );
};
export default UserCard;
