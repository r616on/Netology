import React, { useState } from 'react';
import classnames from 'classnames';
import { concatStyles } from '../../../helpers/css-modules';
import LandingHeader from '../../molecules/LandingHeader/LandingHeader';
import LandingFooter from '../../molecules/LandingFooter/LandingFooter';
import FirstScreen from '../../organisms/FirstScreen/FirstScreen';
import LoginModal from '../../organisms/LoginModal/LoginModal';
import RegisterModal from '../../organisms/RegisterModal/RegisterModal';
import RecoverModal from '../../organisms/RecoverModal/RecoverModal';
import withBrowserFeatures from '../../hooks/withBrowserFeatures';

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";


const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);

const Landing = props => {
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRecoverModalOpen, setRecoverModalOpen] = useState(false);
    const toggleRegisterModal = e => {
        e.preventDefault();
        setRegisterModalOpen(!isRegisterModalOpen);
    };
    const toggleLoginModal = e => {
        e.preventDefault();
        setLoginModalOpen(!isLoginModalOpen);
    };
    const toggleRecoverModal = e => {
        e.preventDefault();
        setRecoverModalOpen(!isRecoverModalOpen);
    };
    const classNames = classnames([
        props.className,
        styles.container
    ]);
    return (
        <div className={classNames}>
            <div className={styles.content}>
                <LandingHeader onLogin={toggleLoginModal}/>
                <main className={styles.main}>
                    <FirstScreen onRegister={toggleRegisterModal}/>
                </main>
                <LandingFooter/>
            </div>
            <LoginModal
                isOpen={isLoginModalOpen}
                onRegister={toggleLoginModal}
                onPasswordRecover={toggleRecoverModal}
                onLogin={toggleLoginModal}
                onClose={toggleLoginModal}
            />
            <RegisterModal
                isOpen={isRegisterModalOpen}
                onRegister={toggleRegisterModal}
                onLogin={toggleRegisterModal}
                onClose={toggleRegisterModal}
            />
            <RecoverModal
                isOpen={isRecoverModalOpen}
                onClose={toggleRecoverModal}
            />
        </div>
    );
};

const Component = withBrowserFeatures(Landing);

export default Component;
