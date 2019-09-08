import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Modal from './components/Modal';
import InfiniteScroll from 'react-infinite-scroll-component'
//import MasonryInfiniteScroller from 'react-masonry-infinite';
// import { Grid, GridItem } from 'react-masonry-infinite-scroll';
import Masonry from 'react-masonry-css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
     images: [],
     query:'',
     count: 1
    
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.searchImg = this.searchImg.bind(this);
    this.fetchData = this.fetchData.bind(this);
   
}

componentDidMount(){

  fetch(`https://pixabay.com/api/?key=13297531-ab9a2b78d5fb940f06962f0ef&image_type=photo&orientation=vertical&per_page=20`)
  .then(response=> response.json())
  .then(data =>this.setState({images: data.hits}))
  .catch(error=>console.log('parsing failed', error))
}

handleChange (e) {    
  this.setState({query:e.target.value})
  
};
handleKeyPress(e) {
  if (e.key === 'Enter') {
   this.searchImg(this.state.query)
    console.log('enter key pressed', this.state.query)

  }
}
searchImg(query) {
  fetch(`https://pixabay.com/api/?key=13297531-ab9a2b78d5fb940f06962f0ef&q=${query}&image_type=photo&orientation=vertical&per_page=20`)
  .then(response=> response.json())
  .then(data =>this.setState({images: data.hits}))
  .catch(error=>console.log('parsing failed', error))
}
fetchData(){
  const { count } = this.state;
  this.setState({ count: this.state.count + 1});
  fetch(`https://pixabay.com/api/?key=13297531-ab9a2b78d5fb940f06962f0ef&image_type=photo&orientation=vertical&page=${count}&per_page=20`)
  .then(response=> response.json())
  .then(data =>this.setState({images: this.state.images.concat(data.hits)}))
  .catch(error=>console.log('parsing failed', error))
  
}
showImg(){
  return(
    this.state.images.map((image, index)=>{
      return(
        <Image dataTarget={image.id} key={index} url={image.webformatURL} />
      )
    })
  )
}
showModal(){
  return(
    this.state.images.map((image, index)=>{
      return(
        <Modal key={index} id={image.id} url={image.webformatURL} />
      )
    })
  )
}
render(){
  
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };
   
      return (

        <React.Fragment>
          <header>
            <Navbar  handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} />
          </header>
            {this.showModal()}
          <div className="content container">
          <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          >
            
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {this.showImg()}
            </Masonry>
          </InfiniteScroll>
            
          </div>
        </React.Fragment>
      );
    }
}
export default App;
