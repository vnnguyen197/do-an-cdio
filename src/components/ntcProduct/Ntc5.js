import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Ntc5 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div className="box1" align="center">
                        <img src="Picture/tudong.jpg" alt="tu dong" /><br />
                        <div align="center">
                            <a href="/Nt5">L111021 – Tủ đông Alaska</a>
                        </div>
                        <p><del>12.200.000 VNĐ</del></p>
                        <h4>6.500.000 VNĐ</h4>
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

export default Ntc5;