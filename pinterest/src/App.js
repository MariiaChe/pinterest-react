import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
     images: []
    }
  }
  componentDidMount(){
   
     this.fetchData();
   
  }
  fetchData(){
    fetch('https://pixabay.com/api/?key=13297531-ab9a2b78d5fb940f06962f0ef&image_type=photo&orientation=vertical')
    .then(response=> response.json())
    .then(images =>this.setState({images}))
    .catch(error=>console.log('parsing failed', error))
  }
  
  render(){
    const { images } = this.state;
    console.log(images);
      return (
        <React.Fragment>
          <header>
          <Navbar/>
          </header>

          <div className="content">
             
          </div>
        </React.Fragment>
      );
    }
}

export default App;
