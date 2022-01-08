import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';

function getTime() {
    return (new Date()).toLocaleTimeString()
}


const App = () => {

    return (

        <div className="ui container comments"> 
           <CommentDetail author="Sammy"
                time={getTime()}
                
           />
           <CommentDetail author ="Alex "
                time={getTime()}
           />
           <CommentDetail author ="Jane"
                time={getTime()}
           />
        </div>
       

    );
};




ReactDOM.render(<App/>, document.querySelector("#root"));
