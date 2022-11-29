import React, { Component } from 'react';

import Footer from '../layouts/footer';
class Ntc3 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div align="center" className="box1">
                        <img src="Picture/ketivi.jpg" alt="ke tivi"/><br />
                        <div align="center">
                            <a href="/Ntc3">H121021 – Kệ tivi xoan 1m8</a>
                        </div>
                        <p><del>1.700.000 VNĐ</del></p>
                        <h4>950.000 VNĐ</h4>
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

export default Ntc3;