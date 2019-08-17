import React from 'react';
import './Image.css';
import Pin from '../img/pin.png';
import Dots from '../img/dot.svg';

class Image extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }
  
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render(){
        var linkStyle;
        var otrolinkstyle;
        if (this.state.hover) {
            linkStyle = {display:'flex', position: 'absolute', top:'15px',right: '15px'};

          } else {
            linkStyle = {display:'none'}
          }
        return(
            <React.Fragment>
                <div  onMouseEnter={()=>this.toggleHover()} onMouseLeave={()=>this.toggleHover()} className="imageItem">
                    
                    <img className="img" src={this.props.url} alt=""/>
                    <button style={linkStyle}><img className="pin" src={Pin} />Guardar</button>
                    <img className="dots" src={ Dots} />
                </div>
            </React.Fragment>
        )
    }
}
export default Image;