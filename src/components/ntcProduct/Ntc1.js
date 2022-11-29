import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";
import Footer from '../layouts/footer';
class Ntc1 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div align="center" className="box1">
                        <img src="Picture/salon.jpeg" alt=""/><br />
                        <div align="center">
                            <NavLink to="/Ntc1">L101021 – Bộ salon gỗ </NavLink>
                        </div>
                        <p><del>2.900.000 VNĐ</del></p>
                        <h4>1.500.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                </article>
            <Footer/>
            </div>
        );
    }
}

export default Ntc1;