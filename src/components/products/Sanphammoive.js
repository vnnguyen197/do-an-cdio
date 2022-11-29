import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Sanphammoive extends Component {
  render() {
    return (
      <div>
        <article>
          <br />
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Hàng thanh lý mới về</h1>
          <hr />
          <img src="Picture/logo1.jpg" width="700px" alt="logo product"/>
          <div className="box">
            <a className="a" href="ntc1.html"><img src="Picture/salon.jpeg" width="225px" height="200px" alt="product salon"/></a>
            <div align="center">
              <a href="ntc1.html">L101021 – Bộ salon gỗ</a>
            </div>
            <p><del>2.900.000 VNĐ</del></p>
            <h4>1.500.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="ntc2.html"><img src="Picture/banan.jpg" width="225px" height="200px" alt="product banan"/></a><br />
            <div align="center">
              <a href="ntc2.html">S121021 – Bộ bàn ăn 4 ghế</a>
            </div>
            <p><del>2.450.000 VNĐ</del></p>
            <h4>2.050.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="ntc3.html"><img src="Picture/ketivi.jpg" width="225px" height="200px" alt="product ke tivi"/></a>
            <div align="center">
              <a href="ntc3.html">H121021 – Kệ tivi xoan 1m8</a>
            </div>
            <p><del>1.700.000 VNĐ</del></p>
            <h4>950.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <br />
          <img src="Picture/LOGO2.jpg" width="700px" alt="logo 2"/>
          <div className="box">
            <a className="a" href="xiu1.html"><img src="Picture/tudong.jpg" width="225px" height="200px" alt="product tudong"/></a><br />
            <div align="center">
              <a href="xiu1.html">L111021 – Tủ đông Alaska</a>
            </div>
            <p><del>12.200.000 VNĐ</del></p>
            <h4>6.500.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="xiu2.html"><img src="Picture/quat.jpeg" width="225px" height="200px" alt="product quat"/></a><br />
            <div align="center">
              <a href="xiu2.html">L111021 – Quạt hơi nước</a>
            </div>
            <p><del>3.400.000 VNĐ</del></p>
            <h4>1.500.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="xiu3.html"><img src="Picture/maygiat.jpg" width="225px" height="200px" alt="product may giat"/></a><br />
            <div align="center">
              <a href="xiu3.html">H121021 – Máy giặt Samsung </a>
            </div>
            <p><del>12.100.000 VNĐ</del></p>
            <h4>6.250.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div><br />
          <br />
          <hr />
        </article>
<Footer/>
      
      </div>
    );
  }
}

export default Sanphammoive;