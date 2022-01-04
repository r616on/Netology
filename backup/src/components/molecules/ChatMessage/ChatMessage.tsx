import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import AvatarUserAndSupportChat
    from "../../atoms/AvatarUserAndSupportChat/AvatarUserAndSupportChat";
import Message from "../../atoms/Message/Message";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

interface ChatMessage {
    user: boolean;
    date?: string;
    text?: string;
    icon?: string;
}

const ChatMessage: React.FC<ChatMessage> = (props) => {
    const {
        user,
        date,
        text,
        icon
    } = props;
    let markup;
    if (user) {
        markup = (
            <div className={styles.container}>
                <div className={styles["ava-left"]}>
                    <AvatarUserAndSupportChat user={user} icon={icon}/>
                </div>
                <div className={styles.message}>
                    <Message user={user} date={date} text={text}/>
                </div>
            </div>
        );
    }
    if (user === false) {
        markup = (
            <div className={styles["container-right"]}>
                <div className={styles["ava-right"]}>
                    <AvatarUserAndSupportChat user={user} icon={icon}/>
                </div>
                <div className={styles["message-right"]}>
                    <Message user={user} date={date} text={text}/>
                </div>
            </div>
        );
    }
    return markup
};

export default ChatMessage;
