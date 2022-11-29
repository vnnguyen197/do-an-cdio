import React, { Component } from "react";
import Footer from "../layouts/footer";

class Gioithieu extends Component {
  render() {
    return (
      <div>
        <article>
          <br />
          <div id="content">
            <ul id="slider">
              <li className="slide showing">
                <img
                  src="Picture/gt3.jpg"
                  width="620px"
                  height="240px"
                  alt="gt3"
                />
              </li>
              <li className="slide">
                <img
                  src="Picture/gt2.jpg"
                  width="620px"
                  height="240px"
                  alt="gt 2"
                />
              </li>
              <li className="slide">
                <img
                  src="Picture/gt4.jpeg"
                  width="620px"
                  height="240px"
                  alt="gt 1"
                />
              </li>
            </ul>
          </div>
          <br />

          <img src="Picture/gioithieu.png" width="700px" alt="intro" />
          <br />
          <br />
          <div align="justify">
            <div style={{ marginLeft: "20px" }}>
              {" "}
              <a href="index.html" className="hd1">
                Shop Thanh Lý Thua Mua Đồ Dùng Cũ NTC
              </a>{" "}
              gửi tới Quý khách hàng lời chúc sức khỏe và lời chào trân trọng
              nhất. Chúng tôi xin chân thành cảm ơn Quý khách hàng đã tin tưởng
              sử dụng các sản phẩm của chúng tôi trong thời gian vừa qua.
            </div>
            <br />
            <div style={{ marginLeft: "20px" }}>
              {" "}
              <div className="hd5">
                Với kinh nghiệm hơn 5 năm về lĩnh vực đồ cũ tại thành phố Đà
                Nẵng, chúng tôi đêm đến cho khách hàng những sản phẩm tốt nhất
                và chất lượng nhất với nhiều mẫu mã thuộc nhiều nghành nghề khác
                nhau. Ngoài ra cửa hàng còn thu mua đồ cũ qua sử dụng với gia
                cao của quán ăn, nhà hàng, quán cafe, quán nhậu, đồ nội thất gia
                đình với giá cạnh tranh. Bạn có thể tìm đến sản phẩm của chúng
                thông thông qua website thanhlydocuntc.com hoặc đến trực tiếp
                kho đều được, mọi thông tin của bạn sẽ được tiếp nhận và phản
                hồi sớm nhất.
                <br />
                <br />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <div className="hd4">
                  Các Sản phẩm chúng tôi đang phân phối trên thị trường hiện nay
                  luôn đáp ứng các tiêu chí:
                </div>
              </div>
              <br />
            </div>
            <div style={{ marginLeft: "200px" }}>
              {" "}
              - Giá cả luôn rẻ nhất thị trường.
              <br />
              - Sản phẩm luôn đảm bảo chất lượng chính hãng;
              <br />- Thông tin sản phẩm rõ ràng, minh bạch, tư vấn cụ thể từng
              loại hàng;
            </div>
          </div>
        </article>
        <Footer/>
      </div>
    );
  }
}

export default Gioithieu;
