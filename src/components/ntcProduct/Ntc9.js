import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Ntc9 extends Component {
    render() {
        return (
            <div>
                <article>
                    <br />
                    <div className="box1" align="center">
                        <img src="Picture/noicom.jpg" alt="noi com"/><br />
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

export default Ntc9;