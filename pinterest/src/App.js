import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
//import MasonryInfiniteScroller from 'react-masonry-infinite';
// import { Grid, GridItem } from 'react-masonry-infinite-scroll';
import Masonry from 'react-masonry-css';
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
    fetch('https://pixabay.com/api/?key=13297531-ab9a2b78d5fb940f06962f0ef&image_type=photo&orientation=vertical&per_page=200')
    .then(response=> response.json())
    .then(data =>this.setState({images: data.hits}))
    .catch(error=>console.log('parsing failed', error))
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
            <Navbar/>
          </header>
          <div className="content container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">

             {images.map(image=>
             <Image key={image.id} url={image.largeImageURL} />
              )}
            </Masonry>
          </div>
        </React.Fragment>
      );
    }
}
export default App;
