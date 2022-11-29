import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Ntc6 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div className="box1" align="center">
                        <img width="500px" height="450px" src="Picture/quat.jpeg" alt="quat"/><br />
                        <div align="center">
                            <a href="/Ntc6">L111021 – Quạt hơi nước</a>
                        </div>
                        <p><del>3.400.000 VNĐ</del></p>
                        <h4>1.500.000 VNĐ</h4>
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

export default Ntc6;