import React, { Component } from 'react';
import logoLongTho from '../../assets/imgs/logoo3.jpg'
class Header extends Component {
    render() {
        return (
          <header style={{height: 450, display: 'flex', alignItems: 'center'}}>
          <img src={logoLongTho} style={{objectFit: 'contain'}} width="100%" height="417px" alt="logo" />
          <div className="menu">
          </div>
        </header>
        );
    }
}

export default Header;