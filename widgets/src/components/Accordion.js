import React, { Component } from "react";

const Accordion = ({items}) => {
    const onTitleClicked=(index) =>
    {
        console.log('title clicked',index);
    };

    const renderedItem = items.map((item,index)=>
        {
            return <React.Fragment key={item.title}> 
                    <div className="title active">

                        <i className="dropdown icon"
                        onClick={()=> onTitleClicked(index)}
                        ></i>
                        {item.title}
                    </div>
                    <div className="content active">
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