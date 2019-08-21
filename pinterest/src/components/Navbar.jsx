import React from 'react';
import './Navbar.css';
import Logo  from '../img/logo-pin.png';
import Search from '../img/search.svg';
import Bell from '../img/bell1.svg';
import Chat from '../img/chat1.svg';
import Dots from '../img/dot.svg';
class Navbar extends React.Component{
    // constructor(props) {
    //     super(props);

    //     this.state = {};

    //     this.handleScroll = this.handleScroll.bind(this);
    // }
    // handleScroll() {
    //     this.setState({scroll: window.scrollY});
    // }
    // componentDidMount() {
    //     const el = document.querySelector('.nav');
    //     this.setState({top: el.offsetTop, height: el.offsetHeight});
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    // componentDidUpdate() {
    //     this.state.scroll > this.state.top ? 
    //         document.body.style.paddingTop = `${this.state.height}px` :
    //         document.body.style.paddingTop = 0;
    // }
    render(){

        
        return(
            <React.Fragment>
                <div  id="navbar" className="nav">
                    <a href="">
                    <div className="logo">
                        <img className="img-fluid" src={Logo} alt="Logo"/>
                    </div>
                    </a>
                    <div className="search">
                        <div className="icon-search">
                            <img src={Search} alt="search"/>
                        </div>
                        <input type="text" placeholder="Buscar" onChange={(e)=>this.props.handleChange(e)} onKeyPress={(e)=>this.props.handleKeyPress(e)} />
                    </div>
                    <div className="btn inicio">
                       Inicio
                    </div>
                    <div className="btn siguiendo">
                        Siguiendo
                    </div>
                    <div className="btn user">
                        <div className="userPic">M</div>
                        <div className="userName">María</div>
                    </div>
                    <div className="border"></div>
                    <div className="message">
                        <img src={Chat} alt="message"/>
                    </div>
                    <div className="news">
                        <img src={Bell} alt="news"/>
                    </div>
                    <div className="add">
                        <img src={Dots} alt="add"/>
                    </div>
                    <hr/>
              
                </div>
                
            </React.Fragment>
        )
    }
   
}
export default Navbar