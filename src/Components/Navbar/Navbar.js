import React from 'react'
import './Navbar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import SpeedIcon from '@mui/icons-material/Speed';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../Assests/logo.jpg'

const Navbar = () => {
    return (
        <div id='top'>
            <div id='top-left'>
                <img id='logo' src={logo} alt="logo" />
                <label id='app-name'> <strong>Unified</strong> Analytics </label>
            </div>

            <div id='top-center'>
                <div>
                <SettingsIcon/>
                <label> Answer Engine </label>
                </div>

                <div>
                <GridViewIcon style={{color: 'rgb(81, 173, 173)'}}/>
                <label> Dashboard </label>
                </div>

                <div>
                <SpeedIcon/>
                <label> Anomalies</label>
                </div>
            </div>

            <div id='top-right'>
                <div id='notification-div'>
                <NotificationsNoneIcon/>
                <span id='notification-icon'>  </span>
                </div>
                
                <div id='profile'>
                <label> Hello <strong>Ira</strong> </label>
                <AccountCircleIcon/>
                </div>
            </div>

    </div>
    )
}

export default Navbar
