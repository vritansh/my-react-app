import React, { Component, useState } from "react";



const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);


    const onTitleClicked=(index) =>
    {
        console.log('title clicked',index);
        setActiveIndex(index);
    };

    const renderedItem = items.map((item,index)=>
        {
            const active = index ===activeIndex?'active':'';


            return <React.Fragment key={item.title}> 
                    <div className={`title ${active}`}>

                        <i className="dropdown icon"
                        onClick={()=> onTitleClicked(index)}
                        ></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p> {item.content } </p> 
                    </div> 
                </React.Fragment>
        }
        )
    return <div className="ui styled accordion">
        {renderedItem}
       
    </div> 
}
export default Accordion; 