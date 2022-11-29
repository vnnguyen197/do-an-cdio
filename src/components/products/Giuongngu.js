import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Giuongngu extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Sản phẩm giường ngủ</h1>
                    <hr />
                    <div className="box">
                        <a className="a" href="ntc1.html"><img src="Picture/giuongngu1.jpeg" width="225px" height="200px" alt="giuong ngu 1"/></a><br />
                        <div align="center">
                            <a href="ntc1.html">S260921 – Giường 1m8 nhựa</a>
                        </div>
                        <p><del>2.700.000 VNĐ</del></p>
                        <h4>1.850.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/giuongngu2.jpg" width="225px" height="200px" alt="giuong ngu 2"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">H070721 – giường 1m5</a>
                        </div>
                        <p><del>4.000.000 VNĐ</del></p>
                        <h4>2.900.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/giuongngu3.jpg" width="225px" height="200px" alt="giuong ngu 3"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">T051021 – giường sắt 1m6</a>
                        </div>
                        <p><del>2.200.000 VNĐ</del></p>
                        <h4>1.150.000 VNĐ</h4>
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

export default Giuongngu;