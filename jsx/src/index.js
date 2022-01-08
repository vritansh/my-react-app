//Import the react and Ract DOM libs 
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component

//Create a react component 
const App = function() 
{
    const buttonText = {var:'text'}

    return <div>
        <label className="label" htmlFor="name"> Enter Name</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor : 'blue' , color: 'white'}}> {buttonText.var}</button>
       
    </div>;
};

if(module.hot)
{
module.hot.accept();
}

ReactDOM.render(
<App/> , 
document.querySelector('#root')

);