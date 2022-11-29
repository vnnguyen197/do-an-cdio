import React, { Component } from 'react';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import Footer from '../layouts/footer';
  
class NoithatGD extends Component {
    render() {
        return (
            <Router>
            <div>
                <article>
                    <br />
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Sản phẩm nội thất gia đình</h1>
                    <hr />
                    <div className="box">               
                        <a className="a" href="/Ntc1"><img src="Picture/salon.jpeg" width="225px" height="200px" alt="salon"/></a><br />
                        <div align="center">
                        <a href="/Ntc1">L101021 – Bộ salon gỗ</a>
                        </div>
                        <p><del>2.900.000 VNĐ</del></p>
                        <h4>1.500.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" href="/Ntc1" /></div>
                    </div>
                    <div className="box">
                        <a className="a" href="/Ntc2"><img src="Picture/banan.jpg" width="225px" height="200px" alt="ban an"/></a><br />
                        <div align="center">
                            <a href="/Ntc2">S121021 – Bộ bàn ăn 4 ghế</a>
                        </div>
                        <p><del>2.450.000 VNĐ</del></p>
                        <h4>2.050.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="/Ntc3"><img src="Picture/ketivi.jpg" width="225px" height="200px" alt="aaaa"/></a><br />
                        <div align="center">
                            <a href="/Ntc3">H121021 – Kệ tivi xoan 1m8</a>
                        </div>
                        <p><del>1.700.000 VNĐ</del></p>
                        <h4>950.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                </article>
              <Footer/>
            </div>
            </Router>
        );
    }
}

export default NoithatGD;