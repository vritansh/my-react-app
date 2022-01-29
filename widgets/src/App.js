import React from "react";
import Accordion from'./components/Accordion'
import Search from "./components/Search";
import Dropdown from './components/Dropdown'
import { useState } from "react";

const items = [
{
    title:'Random value',
    content:'random content'
},
{
    title:'random value 2',
    content:'random content 2 '
},
{
    title:'black',
    content:'cyan'
}
]

const options = [
    {
        key:'Red',
        value:'blue'
    },
    {
        key:'Blue',
        value:'green'
    },
    {
        key:'black',
        value:'cyan'
    }
    ]

    
export default() => {
    const [selected, setSelected] = useState(options[0]);

    return ( 
    <div>
        <Dropdown 
            selected = {selected}
            onSelectedChange={setSelected}
            options={options}
        options={options} />
    </div>
    );
} 