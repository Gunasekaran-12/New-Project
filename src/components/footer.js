import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    
    const footerStyle = {
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        color: '#333333',
        textAlign: 'center',
        padding: '20px 0',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
    };

    const textStyle = {
        margin: '0',
        fontSize: '18px',
        fontWeight: 'bold',
    };

    return (
        <footer style={footerStyle}>
            <p style={textStyle}>&copy; {year} INDIAN SUPER MARKET . All rights reserved.</p>
        </footer>
    );
}

export default Footer;
