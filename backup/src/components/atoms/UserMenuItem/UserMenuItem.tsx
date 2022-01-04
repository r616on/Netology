import * as React from "react";
import {concatStyles} from "../../../helpers/css-modules";
import classnames from "classnames";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import myProfile from "./icon/myProfile.svg";
import myItems from "./icon/myItems.svg";
import settings from "./icon/settings.svg";
import achievements from "./icon/achievements.svg";
import orderTable from "./icon/orderTable.svg";
import depositAndWithdrawal from "./icon/depositAndWithdrawal.svg";
import myNotifications from "./icon/myNotifications.svg";
import signOut from "./icon/signOut.svg";
import referralSystem from "./icon/referralSystem.svg";

import myProfileActive from "./icon_activ/myProfile.svg";
import myItemsActive from "./icon_activ/myItems.svg";
import settingsActive from "./icon_activ/settings.svg";
import achievementsActive from "./icon_activ/achievements.svg";
import orderTableActive from "./icon_activ/orderTable.svg";
import depositAndWithdrawalActive from "./icon_activ/depositAndWithdrawal.svg";
import myNotificationsActive from "./icon_activ/myNotifications.svg";
import signOutActive from "./icon_activ/signOut.svg";
import referralSystemActive from "./icon_activ/referralSystem.svg";
import {NavLink} from "react-router-dom";

const iconArr: object =
    {
        myProfile: myProfile,
        myItems: myItems,
        orderTable: orderTable,
        achievements: achievements,
        settings: settings,
        myNotifications: myNotifications,
        depositAndWithdrawal: depositAndWithdrawal,
        signOut: signOut,
        referralSystem: referralSystem,
    }
const iconArrActive: object =
    {
        myProfile: myProfileActive,
        myItems: myItemsActive,
        orderTable: orderTableActive,
        achievements: achievementsActive,
        settings: settingsActive,
        myNotifications: myNotificationsActive,
        depositAndWithdrawal: depositAndWithdrawalActive,
        signOut: signOutActive,
        referralSystem: referralSystemActive,
    }

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface UserMenuItem {
    text: string;
    icon?: string;
    active?: boolean;
    type: string;
}

const UserMenuItem: React.FC<UserMenuItem> = ({
                                                  to,
                                                  children,
                                                  isFirst,
                                                  text,
                                                  type,
                                                  active
                                              }) => {

    let itemClass = styles.item;
    let svgClass = styles.icon;
    let textClass = styles.text;
    let icon;
    if (active) {
        itemClass = classnames([styles.item, styles["active-item"]]);
        textClass = classnames([styles.text, styles["active-text"]]);
        icon = iconArrActive[type]
    } else {
        icon = iconArr[type]
    }

    return (
        <NavLink className={classnames(itemClass, isFirst && styles.first)}
                 activeClassName={styles.active}
                 to={to}
                 exact={true}>
            <div className={styles.icon}>
                <img className={styles.svg} src={icon} alt=""/>
            </div>
            <div className={textClass}>{children}</div>
        </NavLink>
    );
};
export default UserMenuItem;

