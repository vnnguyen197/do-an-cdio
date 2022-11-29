import React from "react";
import "./footer.css";
import boCongThuong from '../../assets/imgs/gach/bocongthuong.jpg'

function Footer() {
  return (
    <div className="mainfooter">
      <div className="list1">
        <div className="title">LIÊN HỆ</div>
        <div className="deps">Công ty Cổ phần Long Thọ</div>
        <div className="items">
          Địa chỉ: 200 Kinh Dương Vương, Thanh Khê Tây, Liên Chiểu, Đà Nẵng.
        </div>
        <div className="items">Email: terrazzolongtho.com</div>
        <div className="items">Phone: 0903 534 374</div>
        <div className="items">Giấy chứng nhận ĐKKD số: 3300101519</div>
        <div className="items">Người đại diện: Hoàng Phan Vĩnh Phước</div>
      </div>
      <div className="list1">
        <div className="title">NỘI DUNG KHÁC</div>
        <div className="items">Báo giá</div>
        <div className="items">Chính sách bảo mật thông tin</div>
        <div className="items">Quan hệ cổ đông</div>
        <div className="items">Tư vấn hỗ trợ</div>
        <div className="items">Hình ảnh hoạt động</div>
      </div>
      <div className="listItems">
        <img src={boCongThuong} height="60px" alt=""/>
        <div className="items">Thống kê truy cập</div>
      </div>
      <div className="to-top">Back to top</div>
    </div>
  );
}
export default Footer;
