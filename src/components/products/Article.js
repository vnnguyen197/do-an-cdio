import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Article extends Component {
  render() { 
    return (
      <div>
        <article>
          <br />
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'courier,arial,helvetica' }}>Sản phẩm nổi bật</h1>
          <hr />
          <img src="Picture/logo1.jpg" width="700px" alt="logo 1"/>
            <div className="box">
              <a className="a" href="/Ntc1"><img src="Picture/salon.jpeg" width="225px" height="200px" alt="salon" /></a>
              <div align="center">
                <a href="/Ntc1">L101021 _ Bộ salon gỗ</a>
              </div>
              <p><del>2.900.000 VNĐ</del></p>
              <h4>1.500.000 VNĐ</h4>
              <div align="center">
                <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
              </div>
            </div>
          <div className="box">
            <a className="a" href="/Ntc2"><img src="Picture/banan.jpg" width="225px" height="200px" alt="banan"/></a><br />
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
            <a className="a" href="/Ntc3"><img src="Picture/ketivi.jpg" width="225px" height="200px" alt="ketivi"/></a>
            <div align="center">
              <a href="/Ntc3">H121021 – Kệ tivi xoan 1m8</a>
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
            <a className="a" href="/Ntc5"><img src="Picture/tudong.jpg" width="225px" height="200px" alt="tu fdong"/></a><br />
            <div align="center">
              <a href="/Ntc5">L111021 – Tủ đông Alaska</a>
            </div>
            <p><del>12.200.000 VNĐ</del></p>
            <h4>6.500.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="/Ntc6"><img src="Picture/quat.jpeg" width="225px" height="200px" alt="quat"/></a><br />
            <div align="center">
              <a href="/Ntc6">L111021 – Quạt hơi nước</a>
            </div>
            <p><del>3.400.000 VNĐ</del></p>
            <h4>1.500.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="/Ntc7"><img src="Picture/maygiat.jpg" width="225px" height="200px" alt="maygiat"/></a><br />
            <div align="center">
              <a href="/Ntc7">H121021 – Máy giặt Samsung </a>
            </div>
            <p><del>12.100.000 VNĐ</del></p>
            <h4>6.250.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div><br />
          <br />
          <hr />
          <img src="Picture/logo3.jpg" width="700px" alt="logo 3"/>
          <div className="box">
            <a className="a" href="/Ntc4"><img src="Picture/noichien.jpg" width="225px" height="200px" alt="noi chien"/></a><br />
            <div align="center">
              <a href="/Ntc4">Nồi chiên không dầu Bluestone AFB-5866 3.5 lít</a>
            </div>
            <p><del>2.700.000 VNĐ</del></p>
            <h4>1.690.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="/Ntc8"><img src="Picture/mayxay.jpg" width="225px" height="200px" alt="mayxay"/></a><br />
            <div align="center">
              <a href="/Ntc8">Máy xay đa năng Kangaroo KG2B3 </a>
            </div>
            <p><del>790.000 VNĐ</del></p>
            <h4>459.000 VNĐ</h4>
            <div align="center">
              <input className="button" type="button" onclick="myClick()" defaultValue="Mua hàng" />
            </div>
          </div>
          <div className="box">
            <a className="a" href="/Ntc9"><img src="Picture/noicom.jpg" width="225px" height="200px" alt="no chien"/></a><br />
            <div align="center">
              <a href="/Ntc9">Nồi cơm điện nắp gài Kangaroo KG825 1.5 lít</a>
            </div>
            <p><del>950.000 VNĐ</del></p>
            <h4>577.000 VNĐ</h4>
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

export default Article;