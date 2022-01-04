import React from 'react';
import classnames from 'classnames';
import '../../scripts/modernizr';

const { Modernizr } = window;
const withBrowserFeatures = Component => {
    const classNames = classnames({
        'no-flex-gap': !Modernizr.flexgap,
    });
    return props => (
        <Component {...props} className={classNames}>
            {props.children}
        </Component>
    );
};

export default withBrowserFeatures;
