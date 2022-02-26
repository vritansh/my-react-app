import React from "react";
import Link from "./Link";
const Header = () => {

    return ( 

        <div className="ui secondary pointing menu">
            <a Link ="/" className = "item">
                Accordion
            </a>
            <a Link ="/list" className = "item">
                Search
            </a>
            <a Link ="/dropdown" className = "item">
                Dropdown
            </a>
            <a Link ="/translate" className = "item">
                Translate
            </a>
            
        </div>
    )
}

export default Header;