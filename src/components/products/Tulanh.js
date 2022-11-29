import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Tulanh extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Tủ lạnh cũ ở Đà Nẵng</h1>
                    <hr />
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/tulanh1.jpg" width="225px" height="200px" alt=""/></a><br />
                        <div align="center">
                            <a href="ntc2.html">S160721 – Tủ lạnh Hitachi R-WBPGV2 – 429l</a>
                        </div>
                        <p><del>22.000.000 VNĐ</del></p>
                        <h4>9.900.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/tulanh2.jpg" width="225px" height="200px" alt=""/></a><br />
                        <div align="center">
                            <a href="ntc2.html">S160721 – Tủ lạnh Hitachi R-WBPGV2 – 429l </a>
                        </div>
                        <p><del>12.000.000 VNĐ</del></p>
                        <h4>8.600.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/tulanh3.jpg" width="225px" height="200px" alt=""/></a><br />
                        <div align="center">
                            <a href="ntc2.html">H161120 – Tủ lạnh LG GR-B217CPC 581L </a>
                        </div>
                        <p><del>18.000.000 VNĐ</del></p>
                        <h4>16.500.000 VNĐ</h4>
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

export default Tulanh;