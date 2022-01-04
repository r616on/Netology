import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";
import Modal from "../../atoms/Modal/Modal";
import ChatInput from "../../molecules/ChatInput/ChatInput";
import ChatMessage from "../../molecules/ChatMessage/ChatMessage";
import Chat from "../../molecules/Chat/Chat";
import ModalHeader from "../../molecules/ModalHeader/ModalHeader";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const FastAccessChat = ({
                            isOpen,
                            onClose
                        }) => {
    return (
        <Modal needContainer={false} title={"Быстрый доступ"} isOpen={isOpen} onClose={onClose}>
            <ModalHeader
                firstTitle={"Чат с поддержкой"}
                secondTitle={"Частые вопросы"}
                active={"Чат с поддержкой"}
            />
            <div className={styles.chat}>
                <Chat userName={"Shenderro"}>
                    <ChatMessage
                        user={false}
                        date={"12.09.2019"}
                        text={"Привет, как дела ?"}
                    />
                    <ChatMessage
                        user={true}
                        date={"12.09.2019"}
                        text={"Привет, как дела ?"}
                    />
                    <ChatMessage
                        user={false}
                        date={"12.09.2019"}
                        text={"Привет, как дела ?"}
                    />
                    <ChatMessage
                        user={true}
                        date={"12.09.2019"}
                        text={"Привет, как дела ?"}
                    />
                    <ChatMessage
                        user={false}
                        date={"12.09.2019"}
                        text={"Привет, как дела ?"}
                    />
                    <ChatMessage
                        user={true}
                        date={"12.09.2019"}
                        text={"Привет, как дела ?"}
                    />
                    <div className={styles.input}>
                        <ChatInput label={"Введите сообщение..."}/>
                    </div>
                </Chat>
            </div>
        </Modal>
    );
};

export default FastAccessChat;
