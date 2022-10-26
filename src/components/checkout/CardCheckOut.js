import React, { useState } from "react";
import ListCheckOut from "./ListCheckOut";

const CardCheckOut = ({ cartItem, onAdd, onRemove }) => {
  const [namaCust, setNamaCust] = useState("");
  const [noHpCust, setNoHpCust] = useState(0);
  const [tanggalAcara, setTanggalAcara] = useState("");

  const formatRupiah = (angka, prefix) => {
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
  };
  const hasil = cartItem.map((item) =>
    Number(item.harga.split("/").shift().split(" ").pop() * item.qty + "000")
  );
  // const handleProductPesan = () => {
  //   cartItem.map((item) => {
  //     return `Nama pesanan: ${item.nama}\nJumlah: ${item.qty}\nHarga: ${item.harga}`;
  //   });
  // };

  const handlePesan = (e) => {
    e.preventDefault();

    const total = formatRupiah(
      String(hasil.reduce((acc, curr) => acc + curr)),
      "Rp. "
    );
    window.open(
      `https://wa.me/62895362555775?text=${cartItem.map(
        (item) =>
          `Nama%20Pesanan%20:%20${item.nama}%0AJumlah%20:%20${
            item.qty
          }%0AHarga%20:%20${formatRupiah(
            String(
              item.harga.split("/").shift().split(" ").pop() * item.qty + "000"
            ),
            "Rp. "
          )}%0A%0A`
      )}Total%20Harga%20:%20${total}%0A%0ATanggal%20Acara%20:%20${tanggalAcara}%0A%0A*estimasi%20waktu%20selesai%202-3%20hari%20setelah%20pemesanan%0A*---------------%0ANama%20:%20${namaCust}%0ANo%20Hp%20:%20${noHpCust}%0A---------------%0APembayaran:%0ABank%20BCA(82763653628000)%0A%0A*maksimal%20pembayaran%201x24%20Jam%0A*kirim%20bukti%20pembayaran%20ke%20wa%20dan%20tunggu%20konfirmasi%20dari%0Apenjual%20maksimal%201x24%20jam`
    );
  };

  return (
    <div className="checkout-card-container">
      <form onSubmit={handlePesan}>
        <div className="checkout-input-wrapper">
          <label>Nama:</label>
          <input
            placeholder="Nama Lengkap anda..."
            type="text"
            onChange={(e) => setNamaCust(e.target.value)}
            required
          />
          <label>Nomor Handphone/WhatsApp:</label>
          <input
            placeholder="Contoh: 08xxxxxx"
            type="number"
            onChange={(e) => setNoHpCust(e.target.value)}
            required
          />
          <label>Tanggal Acara:</label>
          <input
            type="date"
            onChange={(e) => setTanggalAcara(e.target.value)}
            required
          />
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
                  <ListCheckOut
                    item={item}
                    key={item.id}
                    formatRupiah={formatRupiah}
                    onAdd={onAdd}
                    onRemove={onRemove}
                  />
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
            Total Harga:{" "}
            <span>
              {cartItem.length > 0 &&
                formatRupiah(
                  String(hasil.reduce((acc, curr) => acc + curr)),
                  "Rp. "
                )}
            </span>
          </h3>
        </div>
        <div className="checkout-button-wrapper">
          <button type="submit">Pesan Sekarang</button>
          <p>Pesanan hanya bisa diambil sendiri di alamat yang tercantum.</p>
        </div>
      </form>
    </div>
  );
};

export default CardCheckOut;
