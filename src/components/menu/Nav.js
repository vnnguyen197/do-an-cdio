import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <nav>
            <ul className="list">
              <li className="list-items"><NavLink to="/">TRANG CHỦ</NavLink></li>
              <li className="list-items"><NavLink to="/Gioithieu">GIỚI THIỆU</NavLink></li>
              <li className="list-items"><NavLink to="/Sanphammoive">NĂNG LỰC</NavLink></li>
              <li className="list-items"><NavLink to="/Huongdanmuahang">SẢN PHẨM</NavLink></li>
              <li className="list-items"><NavLink to="/Huongdanmuahang">BÁO GIÁ</NavLink></li>
              <li className="list-items"><NavLink to="/Huongdanmuahang">VIDEO</NavLink></li>
              <li className="list-items"><NavLink to="/Lienhe">LIÊN HỆ</NavLink></li>
            </ul>
          </nav>
          
        );
    }
}

export default Nav;