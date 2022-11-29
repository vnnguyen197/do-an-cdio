import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Ntc4 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div className="box1" align="center">
                        <img src="Picture/noichien.jpg" alt="noi chien"/><br />
                        <div align="center">
                            <a href="quy1.html">Nồi chiên không dầu Bluestone AFB-5866 3.5 lít</a>
                        </div>
                        <p><del>2.700.000 VNĐ</del></p>
                        <h4>1.690.000 VNĐ</h4>
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

export default Ntc4;