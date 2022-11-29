import React, { Component } from 'react';
import Footer from '../layouts/footer';

class Huongdanmuahang extends Component {
  render() {
    return (
      <div>
        <article>
          <br />
          <img src="Picture/Huongdan.png" width="700px" alt="" />
          <br />
          <div className="hd6">Các hình thức đặt hàng:</div> <br /><br />
          <div align="justify">
            <div style={{ marginLeft: '20px' }}> 1. Quý khách có thể mua hàng tại cửa hàng hoặc đặt hàng online qua giỏ
              hàng của website và nhân viên giao hàng sẽ check lại đơn hàng và chuyển hàng theo yêu cầu của quý
              khách hàng.<br /><br /></div>
            <div style={{ marginLeft: '20px' }}> 2. Call Hotline 24/24h: Quý khách gọi điện (kể cả trong và ngoài giờ
              hành chính, ngày lễ, chủ nhật....) đến số 039 3944376 ~ 034 4465816 để được tư vấn về sản phẩm, giá
              cả và đặt hàng<br /><br /></div>
            <div style={{ marginLeft: '20px' }}> 3. Đặt hàng qua facebook: <a style={{ color: '#00F' }} href="https://www.facebook.com/hades2510">https://www.facebook.com/hades2510</a>
              .Quý khách có thể để lại thông tin qua tin nhắn, nhân viên kinh doanh, kho hoặc nhân viên giao hàng
              sẽ liên lạc lại với quý khách để chốt đơn hàng và giao hàng theo yêu cầu.<br /><br /></div>
          </div>
          <div className="hd6">Thủ tục giao hàng</div> <br /><br />
          <div align="justify">
            <div style={{ marginLeft: '20px' }}> 1. Đối với khách hàng trong khu vực nội thành Đà Nẵng: Chúng tôi sẽ
              chuyển hàng miễn phí theo yêu cầu đặt hàng, quý khách chỉ phải trả tiền khi đã nhận được
              hàng.<br /><br /></div>
            <div style={{ marginLeft: '20px' }}> 2. Đối với khách hàng các tình ngoại thành và các tỉnh, thành phố trong
              cả nước, chúng tôi áp dụng hình thức chuyển hàng như sau:<br /><br /></div>
            <div style={{ marginLeft: '20px' }}> * Vận chuyển COD theo đường bưu điện: (thanh toán tiền sau khi nhân viên
              bưu điện giao hàng)
              Chúng tôi chuyển hàng theo yêu cầu đơn hàng đến bất cứ địa chỉ nào của khách hàng, nhân viên bưu
              điện sẽ chuyển hàng đến tận nơi quý khách yêu cầu và thu hộ giá trị đơn hàng khi quý khách nhận được
              hàng.(Quí khách hàng không cần đến bưu điện nhận hàng)
              <br /><br />
            </div>
          </div>
        </article>
     <Footer/>
      </div>
    );
  }
}

export default Huongdanmuahang;