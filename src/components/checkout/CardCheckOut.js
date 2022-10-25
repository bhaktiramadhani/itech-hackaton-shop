import React from "react";
import ListCheckOut from "./ListCheckOut";

const CardCheckOut = ({ cartItem }) => {
  return (
    <div className="checkout-card-container">
      <form>
        <div className="checkout-input-wrapper">
          <label>Nama:</label>
          <input placeholder="Nama Lengkap anda..." type="text" />
          <label>Nomor Handphone/WhatsApp:</label>
          <input placeholder="Contoh: 08xxxxxx" type="number" />
          <label>Tanggal Acara:</label>
          <input type="date" />
          <p>P.S: Estimasi waktu selesai 2-3 hari setelah pemesanan.</p>
        </div>
        <div className="checkout-list-wrapper">
          <h3>Daftar Pesanan</h3>
          <hr />
          <div className="checkout-list-content">
            <div className="list-product-wrapper">
              {cartItem.length === 0 ? (
                <p className="list-product-empyt">Pesanan Masih Kosong!</p>
              ) : (
                cartItem.map((item) => (
                  <ListCheckOut item={item} key={item.id} />
                ))
              )}
            </div>
            <div className="list-address-wrapper">
              <h4>Alamat kami</h4>
              <p>
                Jl. Teluk Tiram Darat, Telawang, Kec. Banjarmasin Barat, Kota
                Banjarmasin, Kalimantan Selatan 70114
              </p>
            </div>
          </div>
          <hr />
          <h3>
            Total Harga: <span>RP. 175.000</span>
          </h3>
        </div>
        <div className="checkout-button-wrapper">
          <button>Pesan Sekarang</button>
          <p>Pesanan hanya bisa diambil sendiri di alamat yang tercantum.</p>
        </div>
      </form>
    </div>
  );
};

export default CardCheckOut;
