import * as React from "react";
import {concatStyles} from "../../../../helpers/css-modules";

import criticalCSS from "../../../molecules/UserMenu/critical.scss";
import mobileCSS from "../../../molecules/UserMenu/mobile.scss";
import tabletCSS from "../../../molecules/UserMenu/tablet.scss";
import desktopCSS from "../../../molecules/UserMenu/desktop.scss";
import UserMenuItem from "../UserMenuItem";
import myProfile from "../icon/myProfile.svg";
import myItems from "../icon/myItems.svg";
import orderTable from "../icon/orderTable.svg";
import achievements from "../icon/achievements.svg";
import settings from "../icon/settings.svg";
import myNotifications from "../icon/myNotifications.svg";
import depositAndWithdrawal from "../icon/depositAndWithdrawal.svg";
import signOut from "../icon/signOut.svg";
import referralSystem from "../icon/referralSystem.svg";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface UserMenu {
}

const UserMenu: React.FC<UserMenu> = (props) => {
    return (
        <div className={styles.conteiner}>
            <div className={styles.triangle}></div>
            <div className={styles.row}>
                <UserMenuItem text={"Мой профиль"} type={"myProfile"}/>
                <UserMenuItem text={"Мои товары"} type={"myItems"} active={true}/>
                <UserMenuItem text={"Стол заказов"} type={"orderTable"}/>
                <UserMenuItem text={"Достижения"} type={"achievements"}/>
                <UserMenuItem text={"Настройки"} type={"settings"}/>
                <UserMenuItem text={"Мои уведомления"} type={"myNotifications"}/>
                <UserMenuItem text={"Пополение и вывод"} type={"depositAndWithdrawal"}/>
                <UserMenuItem text={"Реферальная система"} type={"referralSystem"}/>
                <UserMenuItem text={"Выйти из аккаунта"} type={"signOut"}/>
            </div>
        </div>
    );
};
export default UserMenu;
