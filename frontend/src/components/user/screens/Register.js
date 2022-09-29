import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../actions/userAction";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

     const dispatch = useDispatch();

  //   const userRegister = useSelector((state) => state.userRegister);
  //   const { loading, error, userInfo } = userRegister;

  //   console.log(userInfo);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {name, email, password};
     dispatch(registerUser(name, email, password));
  };

  return (
    <>
      <section className="">
        <div className="mt-5 p-5">
          <h4>Register</h4>
          {/* {error && <span className="danger" style={{
         color: "red",
        fontSize: "18px",
       }}>{error}</span>}
      {userInfo && <h4>{userInfo.message}</h4>} */}
          <form onSubmit={submitHandler}>
            <input
              placeholder="Enter the Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <input
              placeholder="Enter the Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              placeholder="Enter the Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /> <br />
            <button type="submit">Submit</button>
            <br />
            <Link to="/login">{"You an have an account?Sign IN"}</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
