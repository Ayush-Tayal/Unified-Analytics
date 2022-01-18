import React from 'react'
import './Footer.css';
import logo from '../../Assests/logo.jpg'

const Footer = () => {
    return (
        <div id='footer'>
            <div>
                <img id='logo' src={logo} alt="logo" />
                <label id='app-name'> <strong>Unified</strong> Analytics </label>
            </div>
        </div>
    )
}

export default Footer
