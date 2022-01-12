import React from 'react';

class SearchBar extends React.Component
{
state = { term : 'Hi Tehre'}
    render() {
   return (
     <div className="ui segment"> 
        <form className="ui form"> 
            <div>
                <label> Search for Images </label>
                <input value={this.state.term} onChange={ (event) => this.setState({term: event.target.value})} type="text"/>
            </div>
        </form>
    </div>
        )
    }

}

export default SearchBar; 