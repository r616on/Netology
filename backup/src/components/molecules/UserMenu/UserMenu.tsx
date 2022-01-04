import * as React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import UserMenuItem from "../../atoms/UserMenuItem/UserMenuItem";
import topMenuItems from "../TopMenu/data.json";
import userMenuItems from './data.json';

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface UserMenu {
}

const UserMenu: React.FC<UserMenu> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.triangle}></div>
            <div className={styles.row}>
                {...userMenuItems.map(
                    (item: UserMenuItem, index: number) => (
                        <UserMenuItem
                            isFirst={index === 0}
                            isLast={index === topMenuItems.length - 1}
                            to={item.route}
                            type={item.type}
                            key={index}
                            active={item.active || false}
                        >
                            {item.title}
                        </UserMenuItem>
                    )
                )}
            </div>
        </div>
    );
};
export default UserMenu;
