import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar";
import DashboardNavbar from "../DashboardNavbar";
import DashboardFooter from "../DashboardFooter";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../../../config/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import TambahMenuForm from "./TambahMenuForm";
import { MySwal } from "../Dashboard";

const TambahMenu = ({ handleLogOut }) => {
  const [imgFile, setImgFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();

  // onchange inputan
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("Best Seller");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nama !== "" && harga !== "" && desc !== "") {
      MySwal.fire({
        icon: "info",
        title: "tunggu sebentar",
        timer: 2500,
      });
      await addDoc(collection(db, "products"), {
        nama: nama,
        harga: `${harga}/Porsi`,
        kategori: kategori,
        desc: desc,
        img: imgUrl,
        imgNama: imgFile.name,
      })
        .then(() => {
          MySwal.fire({
            icon: "success",
            title: "Berhasil menambahkan Product",
          });
          navigate("/dashboard");
          window.location.reload();
          e.target.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      document.querySelector(".validasi-form").removeAttribute("hidden");
    }
  };

  const handleRemove = () => {
    const checkDelete = window.confirm("apakah anda yakin untuk menghapus?");
    if (checkDelete) {
      const imgRef = ref(storage, `images/${imgFile.name}`);
      deleteObject(imgRef)
        .then(() => alert("berhasil dihapus"))
        .catch((err) => console.log(err));

      const buttonFile = document.getElementById("button-file");
      buttonFile.style.display = "none";
      const textFile = document.getElementById("text-file");
      textFile.style.display = "block";
      const fotoProduk = document.querySelector(".foto-produk");
      fotoProduk.style.width = "100%";
      fotoProduk.style.height = "156px";
      setImgUrl("");
      const images = document.getElementById("img-file");
      images.setAttribute("hidden", "");
      document.getElementById("input-file-img").value = "";
      const inputanImg = document.getElementById("input-file-img");
      inputanImg.removeAttribute("hidden");
    } else return;
  };

  useEffect(() => {
    const uploadFile = () => {
      console.log(imgFile.name);
      const storageRef = ref(storage, `images/${imgFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imgFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL);
            const buttonFile = document.getElementById("button-file");
            buttonFile.style.display = "block";
            const textFile = document.getElementById("text-file");
            textFile.style.display = "none";
            const fotoProduk = document.querySelector(".foto-produk");
            fotoProduk.style.width = "auto";
            fotoProduk.style.height = "auto";
            const img = document.getElementById("img-file");
            img.removeAttribute("hidden");
            const inputanImg = document.getElementById("input-file-img");
            inputanImg.setAttribute("hidden", "");
          });
        }
      );
    };

    imgFile && uploadFile();
  }, [imgFile]);

  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardNavbar handleLogOut={handleLogOut} />
        <div className="tambah-wrapper">
          <h2>Tambah Menu</h2>
          <TambahMenuForm
            handleRemove={handleRemove}
            handleSubmit={handleSubmit}
            imgUrl={imgUrl}
            setDesc={setDesc}
            setHarga={setHarga}
            setImgFile={setImgFile}
            setKategori={setKategori}
            setNama={setNama}
            harga={harga}
          />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default TambahMenu;
