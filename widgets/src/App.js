import React from "react";
import Accordion from'./components/Accordion'
import Search from "./components/Search";
const items = [
{
    title:' What is react? ',
    content:' Sample anser'
},
{
    title:'Why use react? ',
    content:'React is one of the emerging languages'
},
{
    title:'How do you use React? ',
    content:'it is used to create comps'
}
]


export default() => {
    return ( 
    <div>
        <br></br>
        <Search></Search>
    </div>
    );
} 