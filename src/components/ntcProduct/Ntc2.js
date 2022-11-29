import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";
import Footer from '../layouts/footer';
class ntc2 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div align="center" className="box1">
                        <img src="Picture/banan.jpg" alt="banna"/><br />
                        <div align="center">
                        <NavLink to="/Ntc1">S121021 – Bộ bàn ăn 4 ghế</NavLink>
                        </div>
                        <p><del>2.450.000 VNĐ</del></p>
                        <h4>2.050.000 VNĐ</h4>
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

export default ntc2;