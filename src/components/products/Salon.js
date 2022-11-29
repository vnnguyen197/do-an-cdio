import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Salon extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Sản phẩm Salon gỗ</h1>
                    <hr />
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/salon1.jpg" width="225px" height="200px" alt="salon 1"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">HL180421 – Bộ salon xưa</a>
                        </div>
                        <p><del>4.100.000 VNĐ</del></p>
                        <h4>2.400.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/salon2.jpg" width="225px" height="200px" alt="salon 2"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">02 – Salon tay 12 nâu </a>
                        </div>
                        <p><del>4.900.000 VNĐ</del></p>
                        <h4>3.300.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/salon3.jpg" width="225px" height="200px" alt="salon 3"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">Bộ solon gỗ 7 món SFHX002 </a>
                        </div>
                        <p><del>29.000.000 VNĐ</del></p>
                        <h4>20.000.000 VNĐ</h4>
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

export default Salon;