import React from "react";
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Modal from "../../atoms/Modal/Modal";
import Form from "../../atoms/Form/Form";
import Field from "../../molecules/Field/Field";
import Button from "../../atoms/Button/Button";
import FormActions from "../../atoms/FormActions/FormActions";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

// import loginIcon from "../../../images/icons/ic-security-unlocked.svg";

const NickNames = ({
                       isOpen,
                       onClose
                   }) => {
    return (
        <Modal title={"Придумайте Никнейм"} isOpen={isOpen} onClose={onClose}>
            <Form>
                <Field label={"ВВЕДИТЕ ЖЕЛАЕМЫЙ НИКНЕЙМ"} type={"password"}/>
                <Field
                    label={"ВВЕДИТЕ СЕКРЕТНОЕ СЛОВО (МИН 8 СИМВОЛОВ)"}
                    type={"password"}
                />
                <FormActions>
                    <Button
                        as={"button"}
                        color={"primary"}
                        size={"medium"}
                        //onClick={onRegister}
                    >
                        Сохранить
                    </Button>
                </FormActions>
            </Form>
        </Modal>
    );
};

export default NickNames;
