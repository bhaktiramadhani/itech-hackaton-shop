import React, { useState } from "react";
import { auth } from "../../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./cardlogin.css";
import { useNavigate } from "react-router-dom";
import { MySwal } from "../dashboard/Dashboard";

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
          <h2>Masuk</h2>
        </div>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            onChange={(event) => setLoginEmail(event.target.value)}
            placeholder="...@gmail.com"
            value={loginEmail}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => setLoginPassword(event.target.value)}
            value={loginPassword}
            placeholder="Isi password pian..."
          />
          <button
            type="submit"
            id="login-button"
            disabled={loginEmail && loginPassword ? false : true}
          >
            Masuk
          </button>
          <p>
            Lupa
            <button
              className="forget-password"
              onClick={(e) => {
                e.preventDefault();
                MySwal.fire({
                  icon: "info",
                  title: "Silahkan hubungi developer",
                });
              }}
            >
              Password
            </button>{" "}
            ?
          </p>
        </form>
      </div>
    </div>
  );
};

export default CardLogin;
