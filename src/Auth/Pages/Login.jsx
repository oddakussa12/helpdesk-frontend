import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import httpCommon from "../../axios";

import { useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [phoneNumber, password]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await httpCommon.post(
        LOGIN_URL,
        JSON.stringify({ phone_number: phoneNumber, password }),
        {
          withCredentials: true,
          "Access-Control-Allow-Origin": "*",
        }
      );

      const access_token = response?.data?.access_token;
      const user = response?.data;
      const roles = [response?.data?.role];

      setAuth({ access_token, user, roles });
      setPhoneNumber("");
      setPassword("");

      if (response?.data.role === "Admin") {
        navigate("/admin");
      } else if (response?.data.role === "Support") {
        navigate("/support");
      } else {
        navigate("/home");
      }
    } catch (err) {
      setIsLoading(false);
      setErrMsg("Error! Invalid credentials.");
      errRef.current.focus();
    }
  };

  return (
    <div className="card lg:card-side bg-base-200 shadow-xl"
      style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
      <figure><img src="/login-image.png" alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">Login to your account</h2>
        <div
          ref={errRef}
          className={errMsg ? "alert alert-error shadow-lg" : "offscreen"}>
          <div>
            {errMsg ? (<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>) : ''
            }
            <span>{errMsg}</span>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone number</span>
            </label>
            <input
              type="text"
              placeholder="Phone number"
              ref={userRef}
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              required
              className="input input-bordered" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="input input-bordered" />
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-warning mt-10"
              style={{ width: '100px', borderRadius: '2px' }}>
              {isLoading ?  <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
