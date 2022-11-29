import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Ntc7 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div className="box1" align="center">
                        <img width="500px" height="450px" src="Picture/maygiat.jpg" alt="may giat"/><br />
                        <div align="center">
                            <a href="/Ntc7">H121021 – Máy giặt Samsung inventer 16kg WA16J6750SP/SV</a>
                        </div>
                        <p><del>12.100.000 VNĐ</del></p>
                        <h4>6.250.000 VNĐ</h4>
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

export default Ntc7;