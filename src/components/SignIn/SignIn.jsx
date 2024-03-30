import React, { useState } from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "../firebase";
// import './signUp.css'
import './SignIn.css'
import { Link,useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

const SignIn = () => {
  

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const[bg,setBg]=useState('');

  // const signUpWithGoogle = () =>{
  //   signInWithPopup(auth,provider);
  // }
  const navigate = useNavigate();
  return (
    <>
    <div className="signin">
      <div className="signin-container">
        <div className="dummy-container">
        <h2 className="title signin-title" style={{textAlign:"center",color:"black"}}>Sign In</h2>
        <div className="signin-input-container">
            <div className="input-item">
                <label htmlFor="email" className="label">Enter E-mail Address</label>
                <input type="text" className="input-field" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div className="input-item">
                <label htmlFor="pass">Enter Password</label>
                <input type="password" className="input-field"onChange={(e)=>setPass(e.target.value)} value={pass}/>
            </div>
            <div className="button-container">
                <button className="signin-button">Login</button>
            </div>
            <div className="signup-text">
                <span>Not a user ?</span>
                <Link to="/signup" className="signup-shortcut">Sign Up</Link>
            </div>
        </div>
        <div className="back-button">
            <IoIosCloseCircle className="close-btn" onClick={()=>navigate('/')}/>
        </div>
        </div>
      </div>
    </div>
    {errorPopupVisible&&
      <div className="popup"style={{backgroundColor:bg}}>
          {bg==="green"?<FaCheckCircle/>:<IoIosCloseCircle/>}
          <h2 className="popup-message">{errorMessage}</h2>
      </div>}
      </>
  );
};

export default SignIn;
