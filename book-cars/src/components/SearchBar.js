import React from 'react';

class SearchBar extends React.Component
{
state = { term: ''};

onFormSubmit = e =>
{
e.preventDefault();
this.props.onSubmit(this.state.term);
}

state = { term : 'Hi Tehre'}
    render() {
   return (
     <div className="ui segment"> 
        <form onSubmit={this.onFormSubmit} className="ui form"> 
            <div>
                <label>Image search </label>
                <input value={this.state.term} onChange={ (event) => this.setState({term: event.target.value})} type="text"/>
            </div>
        </form>
    </div>
        )
    }

}

export default SearchBar; 