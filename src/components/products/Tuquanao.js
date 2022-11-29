import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Tuquanao extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Sản phẩm tủ quần áo</h1>
                    <hr />
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/quanao1.jpg" width="225px" height="200px" alt="quan ao 1" /></a><br />
                        <div align="center">
                            <a href="ntc2.html">P061021 – Tủ quần áo 2 cánh trắng nhựa</a>
                        </div>
                        <p><del>1.200.000 VNĐ</del></p>
                        <h4>850.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/quanao2.jpg" width="225px" height="200px" alt="quan ao 2"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">P060321 – Tủ quần áo 2 cánh xoan đào </a>
                        </div>
                        <p><del>3.100.000 VNĐ</del></p>
                        <h4>910.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/quanao3.png" width="225px" height="200px" alt="quan ao 3"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">QN270121 – Tủ gỗ 2 cánh 2 hộc để đồ </a>
                        </div>
                        <p><del>1.945.000 VNĐ</del></p>
                        <h4>1.120.000 VNĐ</h4>
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

export default Tuquanao;