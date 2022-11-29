import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Quancafe extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <br />
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/quancafe1.jpg" width="225px" height="200px" alt="quan cf"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">H101021 – Ghế tolix đẩu</a>
                        </div>
                        <p><del>370.000 VNĐ</del></p>
                        <h4>150.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/quancafe2.webp" width="225px" height="200px" alt="quan cafe 2"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">T091021 – Bàn 2 tầng mặt đá</a>
                        </div>
                        <p><del>1.500.000 VNĐ</del></p>
                        <h4>500.000 VNĐ</h4>
                        <div align="center">
                            <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
                        </div>
                    </div>
                    <div className="box">
                        <a className="a" href="ntc2.html"><img src="Picture/quancafe3.jpg" width="225px" height="200px" alt="quan cf 3"/></a><br />
                        <div align="center">
                            <a href="ntc2.html">H071021 – Ghế sofa đơn tay gỗ</a>
                        </div>
                        <p><del>1.750.000 VNĐ</del></p>
                        <h4>850.000 VNĐ</h4>
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

export default Quancafe;