import React, { useState } from "react";
import { auth } from "../../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./cardlogin.css";
import { useNavigate } from "react-router-dom";
import { MySwal } from "../dashboard/Dashboard";
import LogoLogin from "../../assets/images/logo-login.png";

const CardLogin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        navigate("/dashboard");
        MySwal.fire({
          icon: "success",
          title: "Berhasil login",
        });
      })
      .catch((error) => {
        if (error.message.toLowerCase().includes("wrong-password")) {
          MySwal.fire({
            icon: "error",
            title: "Password anda salah!",
          });
          setLoginEmail("");
          setLoginPassword("");
        } else if (error.message.toLowerCase().includes("user-not-found")) {
          MySwal.fire({
            icon: "error",
            title: "Akun anda tidak ditemukan!",
          });
          setLoginEmail("");
          setLoginPassword("");
        } else if (error.message.toLowerCase().includes("too-many-requests")) {
          MySwal.fire({
            icon: "error",
            title:
              "Anda terlalu banyak mencoba password yang salah coba lagi nanti!",
          });
          setLoginEmail("");
          setLoginPassword("");
        }
      });
  };

  return (
    <div className="card-wrapper-container">
      <div className="card-wrapper">
        <div className="card-heading">
          <img src={LogoLogin} alt="Logo Login" width="269" height="230" />
        </div>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            onChange={(event) => setLoginEmail(event.target.value)}
            placeholder="...@gmail.com"
            value={loginEmail}
            required
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => setLoginPassword(event.target.value)}
            value={loginPassword}
            placeholder="Isi password pian..."
            required
          />
          <button
            type="submit"
            id="login-button"
            disabled={loginEmail && loginPassword ? false : true}
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardLogin;
