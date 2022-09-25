import React, { useState } from "react";
import { auth } from "../../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./cardlogin.css";
import { useNavigate } from "react-router-dom";

const CardLogin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    // ketika sudah login tidak bisa login lagi
    event.preventDefault();
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        alert("success login");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message.toLowerCase().includes("wrong-password")) {
          alert("password anda salah!");
          setLoginEmail("");
          setLoginPassword("");
        } else if (error.message.toLowerCase().includes("user-not-found")) {
          alert("akun anda tidak ditemukan!");
          setLoginEmail("");
          setLoginPassword("");
        } else if (error.message.toLowerCase().includes("too-many-requests")) {
          alert(
            "anda terlalu banyak mencoba password yang salah coba lagi nanti!"
          );
          setLoginEmail("");
          setLoginPassword("");
        }
      });
    // if (user === null) return alert("gagal login");
  };

  return (
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
        />
        <button
          type="submit"
          disabled={loginEmail && loginPassword ? false : true}
        >
          Masuk
        </button>
        <p>
          Lupa <a href="#l">Password</a> ?
        </p>
      </form>
    </div>
  );
};

export default CardLogin;
