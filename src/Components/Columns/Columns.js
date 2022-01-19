import React from 'react'
import Graph from '../Graph/Graph'
import './Columns.css'


const Columns = (props) => {
    let browser = props.browserFilter ;
    // console.log("8",browser);

    return (
        <div id='columns'>
            {
                browser.length > 0 ?
                <div>
                <h2>Browser</h2> 
                {browser.map( (e, i) => (
                    <div key={i} id='col-item'>
                        <label> {e} </label>
                        <Graph/>
                    </div>
                ))} 
                </div>
                : <Graph/>
            }

        </div>
    )
}

export default Columns
