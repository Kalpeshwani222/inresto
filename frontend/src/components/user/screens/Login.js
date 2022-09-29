import React,{useState,useEffect} from 'react'
import { useHistory, Link } from "react-router-dom";
import {loginUser} from "../../../actions/userAction";
import {useSelector,useDispatch} from "react-redux";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const dispatch = useDispatch();

  useEffect(() =>{
    if(localStorage.getItem('userInfo')){
      window.location.href = "/"
    }
  },[])

  const submitHandler = async (e) => {
    e.preventDefault();
   dispatch(loginUser(email, password));

  };

  return (
    <>
       <section className="login-section">
        <div className="mt-5 p-5">
        <h4>Login</h4>
          {/* {error && <span className="danger">{error}</span>} */}
          <form onSubmit={submitHandler}>
            <input
            placeholder="Enter the email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
            placeholder="Enter the password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /> <br />
            <button type="submit">Submit</button>
            <br />
            <Link to="/register">{"Don't have an account? Sign Up"}</Link>
            <br />
            <Link to="/reset">{"Don't remember password?Forgot it"}</Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login