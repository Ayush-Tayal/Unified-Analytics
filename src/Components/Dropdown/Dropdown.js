import React from 'react'
import './Dropdown.css'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const Dropdown = () => {
    return (
        <div id='dropdown-comp'>
            <h2> Leads unique by Email Address </h2>

            <div id='dropdown'>
                <FormControl sx={{ minWidth: 500, backgroundColor:'white', borderRadius:'10px' }}>
                    <InputLabel id="demo-simple-select-label"> BreakDown: Browser, Country, Date</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="StackedBar"
                    >
                    </Select>   
                </FormControl>
            </div>
        </div>
    )
}

export default Dropdown
