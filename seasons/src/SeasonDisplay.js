import React from 'react';

const SeasonConfig = {
Summer : {
    text: "It's beach time",
    icon : 'snowflake'
},
Winters : {
text: "Chilling ",
icon : 'snowflake'
}

}
const getSeason =(lat, month)=>
{
    if( month >2 && month < 9 )
    {
        return lat > 0 ? 'Summer' : 'Winters'

    }
    else 
    { 
        return lat > 0 ? 'Summer' : 'Winters'
    }
}

const SeasonDisplay = (props) => 
{
    console.log(props.lat)
    const season = getSeason(props.lat, new Date().getMonth)
    const disp = season==SeasonConfig.Summer.text ? 'It Chilly' : 'Beach time'
    const iconName  = season==SeasonConfig.Summer.text ? SeasonConfig.Summer.icon : SeasonConfig.Winters.icon;
    return  <div className ={`season-display ${season}`}>

        <i className= {`icon-left massive ${iconName} icon`}  />
         <h1> {disp} </h1>
         
         </div>;
   

};


export default SeasonDisplay;