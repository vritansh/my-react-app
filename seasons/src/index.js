import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner  from './Spinner';
//Class based components
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    //the only time we do a direct assignment to this.state
    this.state = {lat: null, errorMessage:''}
  }
  
  componentDidMount()
  {
    
    window.navigator.geolocation.getCurrentPosition(
      (position)=>       this.setState({ lat: position.coords.latitude }),
      (err) =>         this.setState({errorMessage: err})
); 
  }
  componentDidUpdate()
  {console.log('Rendering not done');
  }

  renderContent()
  {
    if(!this.state.errorMessage && this.state.lat)
      return <SeasonDisplay lat={this.state.lat}/> 
    
      return <Spinner message = "Please provide location access" /> 
 
  }
  //React says we have to define below 
  render() {    
    return <div className="">  
      {this.renderContent()}
      </div>

 }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
