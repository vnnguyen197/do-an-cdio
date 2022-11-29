import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Dogiadung extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Sản phẩm đồ gia dụng</h1> <hr />
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/giadung1.jpg" width="225px" height="200px" alt="aaa"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">Máy ép chậm Kalite KL-550 siêu chất lượng</a>
                        </div>
                        <p><del>4.150.000 VNĐ</del></p>
                        <h4>2.800.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/giadung2.jpg" width="225px" height="200px" alt="gia dung"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">Bình đun siêu tốc giữ nhiệt Xiaomi 1.5 lít ZHF4012GL </a>
                        </div>
                        <p><del>1.000.000 VNĐ</del></p>
                        <h4>700.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/giadung3.jpg" width="225px" height="200px" alt="gia dung 3"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">Máy lọc nước RO hydrogen ion kiềm Kangaroo KG100MED 5 lõi</a>
                        </div>
                        <p><del>200.000 VNĐ</del></p>
                        <h4>50.000 VNĐ</h4>
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

export default Dogiadung;