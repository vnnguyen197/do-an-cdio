import React, { Component } from 'react';
import Footer from '../layouts/footer';
class Dangky extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["password"] = "";
        fields["repassword"] = "";
        this.setState({fields:fields});
        alert("details saved successfully!!!!");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }


    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

  
    
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (!fields["repassword"]) {
      formIsValid = false;
      errors["repassword"] = "*Please enter correct password.";
    }


    this.setState({
      errors: errors
    });
    return formIsValid;


  }
  render() {
    return (
      <div>
        <article style={{ float: 'left' }}>
          <br />
          <img src="Picture/Lienhe.png" width="700px" alt=""/>
          <br />
          <br />
          <div className="hi">
            <h1>ĐĂNG KÝ</h1>
            <form onSubmit= {this.submitForm} >
              <div><div>Họ Và Tên*</div><br />
              <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
              </div><br />
              <div>Email*<br />
              <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
              </div><br />
              <div>Mật Khẩu<br />
              <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
              </div><br />
              <div>Nhập Lại Mật Khẩu<br />
              <input type="password" name="repassword" value={this.state.fields.repassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.repassword}</div>
              </div><br />
              <div className="ha"><input type="radio" id="gioi" defaultValue="Nam" />&nbsp;Nam
                <input type="radio" id="gioi" defaultValue="Nữ" />&nbsp;Nữ
                <div className="val_error" id="gioi_error" />
              </div>
              <div className="hu"><button type="submit" value="SignUp">Đăng ký</button></div>
              <br /><br />
            </form>
          </div>
          <br clear="both" />         
        </article>
       <Footer/>
      </div>

    );
  }
}

export default Dangky;