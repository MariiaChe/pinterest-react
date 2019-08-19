import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Modal from './components/Modal';
//import MasonryInfiniteScroller from 'react-masonry-infinite';
// import { Grid, GridItem } from 'react-masonry-infinite-scroll';
import Masonry from 'react-masonry-css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
     images: [],
     value:''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange= this.handleChange.bind(this);
}

componentDidMount(){
     this.fetchData(); 
}
fetchData(){
    fetch('https://pixabay.com/api/?key=13297531-ab9a2b78d5fb940f06962f0ef&image_type=photo&orientation=vertical&per_page=200')
    .then(response=> response.json())
    .then(data =>this.setState({images: data.hits}))
    .catch(error=>console.log('parsing failed', error))
}
handleChange (e) {    
  const value = e.target.value;
  this.setState({
    value: value
  })
 
};
handleKeyPress(e) {
  if (e.key === 'Enter') {
    
    console.log('enter key pressed', this.state.value)
  }
}
render(){
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };
    const { images } = this.state;
    console.log(images);
      return (

        <React.Fragment>
          <header>
            <Navbar handleChange={this.handleChange} value={this.state.value} handleKeyPress={this.handleKeyPress} />
          </header>
          {images.map(image=>
          <Modal id={image.id} url={image.largeImageURL} />)}
          <div className="content container">
            
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">

             {images.map(image=>
             <Image dataTarget={image.id} key={image.id} url={image.largeImageURL} />
         
             
              )}
             
            </Masonry>
            
          </div>
        </React.Fragment>
      );
    }
}
export default App;
