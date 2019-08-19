import React from 'react';
import './Image.css';
import Pin from '../img/pin.png';
import Dots from '../img/dot.svg';
import Share from '../img/share.png'
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
        var othLinkStyle;
        if (this.state.hover) {
            linkStyle = {display:'flex', position: 'absolute', top:'15px',right: '15px'}
            othLinkStyle={display:'block'}
          } else {
            linkStyle = {display:'none'}
            othLinkStyle={display:'none'}
          }
        return(
            <React.Fragment>
                <div  onMouseEnter={()=>this.toggleHover()} onMouseLeave={()=>this.toggleHover()} className="imageItem">
                    
                    <img data-target={'#modal'+this.props.dataTarget} className="img" data-toggle='modal' src={this.props.url} alt=""/>
                    <button style={linkStyle}><img className="pin" src={Pin} />Guardar</button>
                    <div className="circleDots"><img className="dots" src={ Dots} /></div>
                    <img style={othLinkStyle} className="share" src={ Share } />
                </div>
            </React.Fragment>
        )
    }
}
export default Image;