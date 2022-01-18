import { Button } from '@mui/material'
import React from 'react'
import './TopNav.css'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const TopNav = () => {
    return (
        <div id='top-nav'>
            <div id='top-nav-left'>
                <div id='date'>
                    <div>
                        May 27-Jun,2020
                    </div>
                    
                    <div id='calender-icon'>
                        <CalendarTodayIcon/>
                    </div>
                </div>

                <div>
                    <Button variant='outlined' id='compare-btn'> Compare </Button>
                </div>
            </div>

            <div id='top-nav-right'>
                <div>
                    Group by : 
                </div>

                <div id='country'>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Country"
                        >
                        </Select>   
                    </FormControl>
                </div>

                <div id='stacked-bar'>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-label"> Stacked Bar </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="StackedBar"
                        >
                        </Select>   
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default TopNav
