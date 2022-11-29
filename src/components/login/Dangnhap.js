import React from 'react';
import firebase from 'firebase';
import fire from '../../config/fire';
  
const Dangnhap = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    const SignInWithFarebaseGoogle = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(google_provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err);
            })
    }
     const SignInWithFarebaseFacebook = () => {
         var facebook_provider = new firebase.auth.FacebookAuthProvider();
        
         fire.auth().signInWithPopup(facebook_provider)
             .then((re) => {
                 console.log(re);
             })
             .catch((err) => {
                 console.log(err);
             })
     }
    return (
        <div>
            <br />
            {/* <img src="Picture/Lienhe.png" width="700px" /> */}
            <br />
            <section className="login">
                <div className="loginContainer">
                    <h1 >ĐĂNG NHẬP</h1>
                    <br />
                    <label>Tên người dùng</label> <br />
                    <input
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <p className="errorMsg">{emailError}</p>
                    <br />
                    <label>Mật khẩu</label> <br />
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <p className="errorMsg" >{passwordError}</p>
                    <br />
                    {/* <a>Quên Mật Khẩu?</a><a href="test.html">Nhấn vào đây</a> */}
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <button onClick={handleLogin}>Đăng nhập</button>
                                <p>
                                    Chưa có tài khoản?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Đăng ký</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignup}>Đăng ký</button>
                                <p>
                                    Đã có tài khoản ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Đăng nhập</span>
                                </p>
                            </>
                        )}
                    </div>
                    <div className="btnContainer">
                        <button onClick={SignInWithFarebaseGoogle}><i className="fab fa-google"></i>Đăng nhập bằng Google</button>
                    </div>
                    <div className="btnContaniner">
                        <button onClick={SignInWithFarebaseFacebook}><i className="fab fa-facebook"></i>Đăng nhập bằng Facebook</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dangnhap;