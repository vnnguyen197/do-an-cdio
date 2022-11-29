import React, { Component } from 'react';
import Footer from '../layouts/footer';

var username = document.getElementById('username');
var email = document.getElementById('email');
var topic = document.getElementById('topic');
var content = document.getElementById('content');
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var topic_error = document.getElementById('topic_error');
var content_error = document.getElementById('content_error');

export function validateForm() {
  if (username.value === "") {
    username.style.border = "2px solid red";
    name_error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bạn cần nhập họ tên";
    username.focus();
    return false;
  }
  var acong = email.value.indexOf('@');
  var dot = email.value.lastIndexOf('.');

  if (email.value === "" || acong < 1 || dot < acong + 2 || dot + 2 >= email.value.length) {
    email.style.border = "2px solid red";
    email_error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bạn cần nhập đúng email";
    email.focus();
    return false;
  }
  if (topic.value === "") {
    topic.style.border = "2px solid red";
    topic_error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bạn cần nhập tiêu đề";
    topic.focus();
    return false;
  }
  if (content.value === "") {
    content.style.border = "2px solid red";
    content_error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bạn cần nhập nội dung";
    content.focus();
    return false;
  }
}

class Lienhe extends Component {
  render() {
    return (
      <div>
        <article>
          <br />
          <img src="Picture/Lienhe.png" width="700px" alt="aaa"/>
          <br />
          <br />
          <form onsubmit="return validateForm()">
            <div>&nbsp;&nbsp;<div>Họ Tên*</div>&nbsp;&nbsp;
              <input className="h" type="text" id="username" placeholder="Mời bạn nhập tên" />
              <div className="val_error" id="name_error" />
            </div><br />
            <div>&nbsp;&nbsp;<div>Email*</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="h" type="text" id="email" placeholder="Mời bạn nhập email" />
              <div className="val_error" id="email_error" />
            </div><br />
            <div>&nbsp;&nbsp;<div>Tiêu Đề</div>&nbsp;&nbsp;&nbsp;
              <input className="ha" type="text" id="topic" placeholder="Mời bạn nhập tiêu đề" />
              <div className="val_error" id="topic_error" />
            </div><br />
            <div>&nbsp;&nbsp;<div>Nội Dung</div>
              <textarea className="hh" rows={10} cols={70} id="content" placeholder="Mời bạn nhập ý kiến phản hồi" defaultValue={""} />
              <div className="val_error" id="content_error" />
            </div><br />
            <div className="hu"><button type="submit" onClick={() => this.validateForm()} >Gửi Thông Tin</button></div>
          </form>
        </article>
      <Footer/>
      </div>
    );
  }
}

export default Lienhe;