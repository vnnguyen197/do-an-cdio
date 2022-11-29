import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Ntc8 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div className="box1" align="center">
                        <img width="500px" height="450px" src="Picture/mayxay.jpg" alt="may xay"/><br />
                        <div align="center">
                            <a href="/Ntc8">Máy xay đa năng Kangaroo KG2B3 </a>
                        </div>
                        <p><del>790.000 VNĐ</del></p>
                        <h4>459.000 VNĐ</h4>
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

export default Ntc8;