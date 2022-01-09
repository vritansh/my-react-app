import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';

function getTime() {
    return (new Date()).toLocaleTimeString()
}


const App = () => {

    return (
        <div className="ui container comments"> 
        <ApprovalCard> 
            <div> 
                    Are you sure you want to do this
             </div>
             </ApprovalCard>
          
            <ApprovalCard>
           <CommentDetail author="Sammy"
                time={getTime()}   
           />
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail author ="Alex "
                time={getTime()}
           />
           </ApprovalCard>
           <CommentDetail author ="Jane"
                time={getTime()}
           />
        </div>
    );
};




ReactDOM.render(<App/>, document.querySelector("#root"));
