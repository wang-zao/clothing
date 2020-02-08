import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-buttom`} {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;