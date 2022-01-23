import React from "react";
import Accordion from'./components/Accordion'

const items = [
{
    title:' What is react? ',
    content:' Sample anser'
},
{
    title:'Why use react? ',
    content:'React is favorite '
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
        <Accordion items={items} /> 
    </div>
    );
} 