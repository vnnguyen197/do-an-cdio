import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Banghe extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <br />
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Sản phẩm bàn ghế</h1> <hr />
                    <div className="box">
                        <a className="a" href="ntc1.html"><img src="Picture/banghe1.jpg" width="225px" height="200px" alt="ban ghe"/></a><br />
                        <div align="center">
                            <a href="ntc1.html">Bộ bàn ghế tần thủy hoàng tứ quý gõ đỏ 6 món – BBG093</a>
                        </div>
                        <p><del>25.000.000 VNĐ</del></p>
                        <h4>20.000.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/banghe2.jpg" width="225px" height="200px" alt="ban ghe 2"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">Bộ bàn ghế kiểu trống gỗ hương 7 món – BBG1111 </a>
                        </div>
                        <p><del>16.900.000 VNĐ</del></p>
                        <h4>11.000.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc3.html"><img src="Picture/banghe3.jpg" width="225px" height="200px" alt="ban ghe 3"/></a><br />
                        <div align="center">
                            <a href="ntc3.html">Bộ bàn ghế minh 3 món gỗ hương Việt Nam – BBG688</a>
                        </div>
                        <p><del>13.300.000 VNĐ</del></p>
                        <h4>11.500.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                </article>
            <Footer />
            </div>
        );
    }
}

export default Banghe;