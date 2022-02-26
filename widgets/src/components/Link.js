import React from "react";

const Link  = ({className, href , children}) => {

    const onclick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);
        
        const navEvent  = new PopStateEvent('popState');
        window.dispatchEvent(navEvent);
    
    };

    return <a 
                className={className} 
                href ={href}
    > 
            {children}
    </a>
};

export default Link; 