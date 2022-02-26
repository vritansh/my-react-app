import react, { useEffect, useRef } from  'react';
import { useState } from 'react';
const Dropdown = ({options, selected, onSelectedChange}) => 
{
const[open, setOpen] = useState(false);
const ref = useRef()


useEffect(() => {
    const onBodyClick = (event)=>{
        if(ref.current.contains(event.target)){
            return;
        }
        setOpen(false);
    }; 
 
    document.body.addEventListener('click', onBodyClick)
    return () => {
        document.body.removeEventListener('click', onBodyClick);
    }
})

    const renderedOptions = options.map((options)=>
    {
        if(options.value === selected.value){
            return 
        }
        return(
                <div 
                onClick={() => onSelectedChange(options)}
                key={options.value} 
                className="item">
                        {options.key}
                </div> 

        );
    });
    return (
        <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">
                Select a Color
                </label> 
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active': '' }`}> 
                    <i className="dropdown icon">     
                    </i>
                    <div className="text"> 
                    {selected.key}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}  >{renderedOptions} </div>s
                </div> </div>
        </div>
    );
};

export default Dropdown; 
