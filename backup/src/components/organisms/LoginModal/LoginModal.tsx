import React, { useState } from 'react';
import { concatStyles } from '../../../helpers/css-modules';

import Modal from '../../atoms/Modal/Modal';
import Form from '../../atoms/Form/Form';
import Button from '../../atoms/Button/Button';
import FormActions from '../../atoms/FormActions/FormActions';
import Field from '../../molecules/Field/Field';
import ButtonGroup from '../../molecules/ButtonGroup/ButtonGroup';

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import tabletCSS from './tablet.scss';
import desktopCSS from './desktop.scss';

const styles = concatStyles([
    criticalCSS,
    mobileCSS,
    tabletCSS,
    desktopCSS
]);

import loginIcon from '../../../images/icons/ic-security-unlocked.svg';
import Checkbox from "../../molecules/Checkbox/Checkbox";

const LoginModal = ({ isOpen, onClose, onRegister, onLogin, onPasswordRecover }) => {
    const handleRecoverPassword = e => {
        onClose(e);
        onPasswordRecover(e);
    };
    return (
        <Modal title={'Авторизация'} isOpen={isOpen} onClose={onClose}>
            <Form>
                <Field label={'Логин'}/>
                <Field label={'Пароль'} type={'password'}>
                    <Button
                        as={'a'}
                        color={'link'}
                        onClick={handleRecoverPassword}
                    >
                        Забыли пароль?
                    </Button>
                </Field>
                <div className={styles['remember-me']}>
                    <Checkbox label={'Запомнить меня'}/>
                </div>
                <ButtonGroup>
                    <Button
                        as={'button'}
                        color={'info'}
                        size={'medium'}
                        icon={loginIcon}
                        onClick={onLogin}
                    >
                        Войти
                    </Button>
                </ButtonGroup>
                <FormActions hint={'Ещё нет аккаунта?'}>
                    <Button
                        as={'button'}
                        color={'primary'}
                        size={'medium'}
                        onClick={onRegister}
                    >
                        Создать аккаунт
                    </Button>
                </FormActions>
            </Form>
        </Modal>
    );
};

export default LoginModal;
