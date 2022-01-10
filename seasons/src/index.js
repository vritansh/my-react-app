import React from 'react';
import ReactDOM from 'react-dom';
//Class based components
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    //the only time we do a direct assignment to this.state
    this.state = {lat: null, errorMessage:''};

    window.navigator.geolocation.getCurrentPosition(
      (position)=> {
        //a set state should be always called.
          this.setState({ lat: position.coords.latitude })
      },
      (err) => {

        this.setState({errorMessage: err})
      }
); 
  }
  
  componentDidMount()
  {
    console.log('Rendered to screen');
  }
  componentDidUpdate()
  {console.log('Rendering not done');
  }
  //React says we have to define below 
  render() {    
    return <div> Latitude: {this.state.lat}</div>;  
  }
}



ReactDOM.render(<App/>, document.querySelector("#root"));
