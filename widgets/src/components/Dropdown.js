import react from  'react';

const Dropdown = ({options, selected, onSelectedChange}) => 
{
    
    const renderedOptions = options.map((options)=>
    {
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
        <div className="ui form">
        <div className="field">
            <label className="label">
                Select a Color
                </label> 
                <div className="ui selection dropdown visible active"> 
                    <i className="dropdown icon">     
                    </i>
                    <div className="text"> 
                    {selected.key}</div>
                    <div className="menu visible transition">{renderedOptions} </div>
                    
                </div>            </div>
        </div>
    );
};

export default Dropdown; 
