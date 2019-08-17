import React from 'react';
import './Modal.css';
class Modal extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button> */}
                    <div className="modal fade bd-example-modal-lg" id={'modal'+this.props.id} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                      <img src={this.props.url} alt=""/>
                        </div>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default Modal;
