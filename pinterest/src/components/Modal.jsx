import React from 'react';
import './Modal.css';
import Pin from '../img/pin.png';
import Share from '../img/share2.png';
import Dots from '../img/dot.svg';
import Arrow from '../img/arrowback.svg';
import Close from '../img/cancel.svg';

class Modal extends React.Component{
    render(){
        return(
            <React.Fragment>
               
{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}


<div className="modal fade " id={'modal'+this.props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
  
      <div className="modal-header">
       
          <div className="arrow close" data-dismiss="modal" aria-label="Close">
            <img src={Arrow} alt=""/>
          </div>
         
          <div className="add">
            <img src={Dots} alt="add"/>
          </div>
          <button className="sent"><img className="shar" src={Share} />Enviar</button>
          <button className="save"><img className="pin" src={Pin} />Guardar</button>
          <div className="closed close"  data-dismiss="modal" aria-label="Close">
            <img src={Close} alt=""/>
          </div>
       
      </div>
      <div className="modal-body">
       <img className="img-fluid" src={this.props.url} alt=""/>
      </div>
      <div className="modal-footer">
      
      </div>
    </div>
  </div>
</div>
            </React.Fragment>
        )
    }
}
export default Modal;
