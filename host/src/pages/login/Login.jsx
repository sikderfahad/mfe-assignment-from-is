import React, { useState } from "react";
import googleIcon from "../../assets/google-icon.png";
import { useAuth } from "@shared/AuthProvider";
// import { useAuth } from "../../provider/AuthProvider";

const Login = () => {
  const [clickLogin, setClickLogin] = useState(false);
  const { loading, googleLogin } = useAuth();
  // console.log(user);

  const handleGoogleLogin = async () => {
    setClickLogin(true);
    try {
      await googleLogin();
    } catch (error) {
      console.log(error);
    } finally {
      setClickLogin(false);
    }
  };
  console.log(loading);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white">
      <div>
        <button
          onClick={handleGoogleLogin}
          className="border border-green-500 cursor-pointer rounded-lg px-6 py-3 outline-none flex items-center gap-3"
        >
          <span>
            <img
              src={googleIcon}
              alt=""
              className={`w-8 h-8 ${
                loading && clickLogin ? "animate-spin" : ""
              }`}
            />
          </span>{" "}
          <span className="text-base font-medium">
            Please login to countinue
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
