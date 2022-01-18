import React, { useState } from 'react'
import './SideNav.css'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Columns from '../Columns/Columns';
import { MenuItem } from '@mui/material';

const SideNav = () => {
    const [browserFilter, setBrowserFilter] = useState([]);
    // const [countryFilter, setCountryFilter] = useState([]); 
    // console.log("Browser Filter", browserFilter);
    // console.log("Country Filter", countryFilter);

    const onChange = (event) => {
        let ref = [...browserFilter]
        if(ref.findIndex((e) => e===event.target.value) === -1) {
            ref.push(event.target.value)
            setBrowserFilter(ref)
        } else {
            alert(`${event.target.value} already created`);
        }
    };

    return (
        <div id='side-nav'>
            <div style={{borderRight:'1px solid rgb(209, 209, 209)', paddingRight:'30px'}}>
                <div id='input'>
                    <SearchIcon/>
                    <input type="text" placeholder='Search...' />
                </div>

                <div id='browser-filter' className='filter'>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-label"> Browser </InputLabel>
                        <Select native={true} onChange={onChange} label='Browser' >
                            <option value="Chrome(12k)"> Chrome </option>
                            <option value="Firefox(5k)"> Firefox </option>
                            <option value="Safari(9k)"> Safari </option>
                            <option value="Edge(2k)"> Edge </option>
                            <option disabled value="Undefined"> Undefined </option>
                        </Select>
                    </FormControl>
                </div>

                <div id="country-filter" className='filter'>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-label"> Country </InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Country"
                        >
                        </Select>   
                    </FormControl>
                </div>

                <div id='dates-filter' className='filter'>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-label"> Dates </InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Dates"
                        >
                        </Select>   
                    </FormControl>
                </div>

            </div>

            <div id='col'>
               <Columns browserFilter={browserFilter} />
            </div>

        </div>
        
    )
}

export default SideNav

{/* <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Browser"
    onChange={(e) => console.log("select", e)}
    >
    <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Chrome" />
    </FormGroup>

    <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Firefox" />
    </FormGroup>

    <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Safari" />
    </FormGroup>

    <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Edge" />
    </FormGroup>

    <FormGroup>
        <FormControlLabel control={<Checkbox  />} label="Undefined" />
    </FormGroup>

</Select>  */}