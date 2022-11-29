import React from "react";
import "./../styles/App.css";
// import Firebase from "../config/fire";
// import Trangchulogin from './Trangchulogin';
// import Dangnhap from './login/Dangnhap';
// import Aside from './menu/Aside';
import "./../styles/App.css";
import Article from "./products/Article";
import Nav from "./menu/Nav";
import Lienhe from "./supports/Lienhe";
import Gioithieu from "./info/Gioithieu";
import Dangky from "./login/Dangky";
import Huongdanmuahang from "./supports/Huongdanmuahang";
import Sanphammoive from "./products/Sanphammoive";
import NoithatGD from "./products/NoithatGD";
import BanGhe from "./products/BanGhe";
import Giuongngu from "./products/Giuongngu";
import Salon from "./products/Salon";
import Tulanh from "./products/Tulanh";
import Dogiadung from "./products/Dogiadung";
import Tuquanao from "./products/Tuquanao";
import Quancafe from "./products/Quancafe";
import Ntc1 from "./ntcProduct/Ntc1";
import Ntc2 from "./ntcProduct/Ntc2";
import Ntc3 from "./ntcProduct/Ntc3";
import Ntc4 from "./ntcProduct/Ntc4";
import Ntc5 from "./ntcProduct/Ntc5";
import Ntc6 from "./ntcProduct/Ntc6";
import Ntc7 from "./ntcProduct/Ntc7";
import Ntc8 from "./ntcProduct/Ntc8";
import Ntc9 from "./ntcProduct/Ntc9";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layouts/header";

function HomePage() {
  // const [user, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [hasAccount, setHasAccount] = useState(false);

  // const clearInputs = () => {
  //   setEmail('');
  //   setPassword('');
  // }

  // const clearErrors = () => {
  //   setEmailError('');
  //   setPasswordError('');
  // }

  // const handleLogin = () => {
  //   clearErrors();
  //   Firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/user-disabled":
  //         case "auth/user-not-found":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/wrong-password":
  //           setPasswordError(err.message);
  //           break;
  //           default:
  //       }
  //     });
  // };

  // const handleSignup = () => {
  //   clearErrors();
  //   Firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       switch (err.code) {
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //           break;
  //           default:
  //       }
  //     });
  // }

  // const handleLogout = () => {
  //   Firebase.auth().signOut();
  // };

  // const authListener = () => {
  //   Firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       clearInputs()
  //       setUser(user)
  //     } else {
  //       setUser('');
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, [user]);
  // <div className="App">
  //     {/* <Trangchulogin/> */}
  //   {/* {user ? (
  //     <Trangchulogin
  //       handleLogout={handleLogout}
  //       />
  //   ) : (
  //     <Dangnhap
  //       email={email}
  //       setEmail={setEmail}
  //       password={password}
  //       setPassword={setPassword}
  //       handleLogin={handleLogin}
  //       handleSignup={handleSignup}
  //       hasAccount={hasAccount}
  //       setHasAccount={setHasAccount}
  //       emailError={emailError}
  //       passwordError={passwordError}
  //     />
  //     )}    */}
  // </div>
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav></Nav>
        <Route ex path="/" component={Article} />
        <Route ex path="/Lienhe" component={Lienhe} />
        <Route ex path="/Gioithieu" component={Gioithieu} />
        <Router ex path="/Dangky" component={Dangky} />
        <Route ex path="/Huongdanmuahang" component={Huongdanmuahang} />
        <Route ex path="/Sanphammoive" component={Sanphammoive} />
        <Route ex path="/NoithatGD" component={NoithatGD} />
        <Route ex path="/BanGhe" component={BanGhe} />
        <Route ex path="/Giuongngu" component={Giuongngu} />
        <Route ex path="/Salon" component={Salon} />
        <Route ex path="/Dogiadung" component={Dogiadung} />
        <Route ex path="/Tuquanao" component={Tuquanao} />
        <Route ex path="/Tulanh" component={Tulanh} />
        <Route ex path="/Quancafe" component={Quancafe} />
        <Route ex path="/Ntc1" component={Ntc1} />
        <Route ex path="/Ntc2" component={Ntc2} />
        <Route ex path="/Ntc3" component={Ntc3} />
        <Route ex path="/Ntc4" component={Ntc4} />
        <Route ex path="/Ntc5" component={Ntc5} />
        <Route ex path="/Ntc6" component={Ntc6} />
        <Route ex path="/Ntc7" component={Ntc7} />
        <Route ex path="/Ntc8" component={Ntc8} />
        <Route ex path="/Ntc9" component={Ntc9} />
      </Router>
    </div>
  );
}

export default HomePage;
