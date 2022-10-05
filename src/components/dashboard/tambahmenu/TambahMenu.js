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
    alert("tunggu sebentar!");
    if (nama !== "" && harga !== "" && desc !== "") {
      await addDoc(collection(db, "products"), {
        nama: nama,
        harga: `${harga}/Porsi`,
        kategori: kategori,
        desc: desc,
        img: imgUrl,
      })
        .then(() => {
          alert("success");
          navigate("/dashboard");
          e.target.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("silahkan isi terlebih dahulu!");
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
      fotoProduk.style.width = "350px";
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

  const handlePrice = (e) => {
    function formatRupiah(angka, prefix) {
      var number_string = angka.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);
      if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }

      rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
      return prefix === undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
    }
    e.target.value = formatRupiah(e.target.value, "Rp. ");
    setHarga(e.target.value);
  };

  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardNavbar handleLogOut={handleLogOut} />
        <div className="tambah-wrapper">
          <h2>Tambah Menu</h2>
          <form className="tambah-input-wrapper" onSubmit={handleSubmit}>
            <div className="one-wrapper">
              <div className="one-produk-wrapper">
                <label>Foto Produk</label>
                <div className="foto-produk">
                  <img src={imgUrl} alt="test" hidden id="img-file" />
                  <p id="text-file">Upload Disini</p>
                  <input
                    type="file"
                    onChange={(e) => setImgFile(e.target.files[0])}
                    id="input-file-img"
                  />
                  <button id="button-file" onClick={handleRemove} type="button">
                    X
                  </button>
                </div>
              </div>
              <div className="one-produk-wrapper">
                <label>Nama Produk</label>
                <textarea
                  type="text"
                  onChange={(e) => setNama(e.target.value)}
                  className="input-nama"
                  placeholder="Isi nama produk"
                />
              </div>
            </div>
            <div className="two-wrapper">
              <div className="two-produk-wrapper">
                <label>Harga Produk</label>
                <input
                  type="text"
                  placeholder="Isi harga produk"
                  onChange={(e) => setHarga(e.target.value)}
                  onKeyUp={handlePrice}
                />
              </div>
              <div className="two-produk-wrapper">
                <label>Kategori Produk</label>
                <select
                  onChange={(e) => {
                    if (e.target.options.selectedIndex === 0) {
                      setKategori("Best Seller");
                    } else {
                      setKategori("Biasa");
                    }
                  }}
                >
                  <option className="option-kategori">Best Seller</option>
                  <option className="option-kategori">Biasa</option>
                </select>
              </div>
            </div>
            <div className="desc-produk-wrapper">
              <label>Deskripsi Produk</label>
              <textarea
                placeholder="Isi deskripsi produk"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button type="submit" id="upload-produk">
              Upload
            </button>
          </form>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default TambahMenu;
