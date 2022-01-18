import React from 'react'
import './Home.css'
import Dropdown from '../Dropdown/Dropdown'
import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'

const Home = () => {
    return (
        <div id='home'>
            <Dropdown/>
            <TopNav/>
            <SideNav/>
        </div>
    )
}

export default Home
