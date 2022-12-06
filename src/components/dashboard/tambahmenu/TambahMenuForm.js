import React, { useEffect, useState } from "react";
import { storage } from "../../../config/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MySwal } from "../Dashboard";

const TambahMenuForm = ({
  handleSubmit,
  handleSubmitDashboard,
  imgUrl,
  setImgFile,
  setNama,
  setHarga,
  setDesc,
  setKategori,
  handleRemoveDashboard,
  dashboard,
  product,
  handleRemove,
  setModal,
}) => {
  const [editImgUrl, setEditImgUrl] = useState("");
  const [editNama, setEditNama] = useState("");
  const [editHarga, setEditHarga] = useState();
  const [editKategori, setEditKategori] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editImgNama, setEditImgNama] = useState("");
  const [editId, setEditId] = useState("");
  const [newImgNama, setNewImgNama] = useState("");

  useEffect(() => {
    const uploadFile = () => {
      setNewImgNama(editImgNama.name);
      const storageRef = ref(storage, `images/${editImgNama.name}`);
      const uploadTask = uploadBytesResumable(storageRef, editImgNama);

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
            setEditImgUrl(downloadURL);
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
    editImgNama && uploadFile();
  }, [editImgNama]);

  useEffect(() => {
    if (dashboard) {
      setNewImgNama(product.imgNama);
      setEditImgUrl(product.img);
      setEditNama(product.nama);
      setEditHarga(product.harga);
      setEditKategori(product.kategori);
      setEditDesc(product.desc);
      setEditId(product.id);
    }
  }, [product]);

  const handlePrice = (e, component) => {
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
    if (component === "dashboard") {
      setEditHarga(e.target.value);
    } else if (component === "tambahmenu") {
      setHarga(e.target.value);
    }
  };
  return (
    <form
      className="tambah-input-wrapper"
      onSubmit={(e) =>
        dashboard
          ? handleSubmitDashboard(
              editImgUrl,
              editNama,
              editHarga,
              editKategori,
              editDesc,
              newImgNama,
              editId,
              e
            )
          : handleSubmit(e)
      }
      style={dashboard && { margin: 0 }}
    >
      {dashboard && (
        <button
          className="close-modal-dashboard"
          onClick={() => {
            setModal(false);
          }}
          type="button"
        >
          X
        </button>
      )}
      <div className="one-wrapper">
        <div className="one-produk-wrapper">
          <label>Foto Produk</label>
          <div
            className="foto-produk"
            style={{
              width: `${dashboard ? "auto" : null}`,
              height: `${dashboard ? "auto" : null}`,
            }}
          >
            <img
              src={imgUrl ? imgUrl : editImgUrl}
              alt="test"
              hidden={dashboard ? false : true}
              id="img-file"
            />
            <p
              id="text-file"
              style={{
                display: `${dashboard ? "none" : "block"}`,
              }}
            >
              Upload Disini
            </p>
            <input
              type="file"
              onChange={(e) => {
                const fileExtension = e.target.files[0].name
                  .split(".")
                  .pop()
                  .toLowerCase();

                if (fileExtension !== "jpg" && fileExtension !== "png") {
                  e.target.value = null;
                  MySwal.fire({
                    icon: "error",
                    title: "file harus jpg atau png",
                  });
                } else {
                  dashboard
                    ? setEditImgNama(e.target.files[0])
                    : setImgFile(e.target.files[0]);
                }
              }}
              id="input-file-img"
              hidden={dashboard ? true : false}
            />
            <button
              id="button-file"
              onClick={() =>
                dashboard
                  ? handleRemoveDashboard(newImgNama, setEditImgUrl)
                  : handleRemove()
              }
              type="button"
              style={{
                display: `${dashboard ? "block" : "none"}`,
              }}
            >
              X
            </button>
          </div>
        </div>
        <div className="one-produk-wrapper">
          <label>Nama Produk</label>
          <textarea
            type="text"
            onChange={(e) =>
              dashboard ? setEditNama(e.target.value) : setNama(e.target.value)
            }
            value={dashboard && editNama}
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
            onChange={(e) =>
              dashboard
                ? setEditHarga(e.target.value)
                : setHarga(e.target.value)
            }
            onKeyUp={(e) =>
              dashboard
                ? handlePrice(e, "dashboard")
                : handlePrice(e, "tambahmenu")
            }
            defaultValue={dashboard && editHarga}
          />
        </div>
        <div className="two-produk-wrapper">
          <label>Kategori Produk</label>
          <select
            value={dashboard && editKategori}
            onChange={(e) => {
              if (e.target.options.selectedIndex === 0) {
                dashboard
                  ? setEditKategori("Best Seller")
                  : setKategori("Best Seller");
              } else {
                dashboard ? setEditKategori("Biasa") : setKategori("Biasa");
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
          onChange={(e) =>
            dashboard ? setEditDesc(e.target.value) : setDesc(e.target.value)
          }
          value={dashboard && editDesc}
        />
      </div>
      <button type="submit" id="upload-produk">
        {dashboard ? "Edit" : "Upload"}
      </button>
    </form>
  );
};

export default TambahMenuForm;
