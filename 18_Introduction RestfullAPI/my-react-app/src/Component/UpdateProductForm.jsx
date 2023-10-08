import React, { useState } from "react";
import axios from "axios";

const UpdateProductForm = () => {
  const [productId, setProductId] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdate = async () => {
    try {
      // Mengirim permintaan PUT ke endpoint API dengan ID produk yang akan diperbarui
      const response = await axios.put(
        `https://your-mockapi-url.com/products/${productId}`,
        {
          productName: newProductName,
          // Tambahkan data lain yang ingin diperbarui di sini
        }
      );

      // Jika pembaruan berhasil, tampilkan pesan sukses
      if (response.status === 200) {
        setSuccessMessage("Data produk berhasil diperbarui!");
        setErrorMessage(""); // Hapus pesan kesalahan jika ada
      } else {
        setErrorMessage("Gagal memperbarui data produk.");
        setSuccessMessage(""); // Hapus pesan sukses jika ada
      }
    } catch (error) {
      // Tangani kesalahan jika terjadi
      console.error("Error:", error);
      setErrorMessage("Terjadi kesalahan saat memperbarui data produk.");
      setSuccessMessage(""); // Hapus pesan sukses jika ada
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Product Name"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Product</button>
      <p style={{ color: "green" }}>{successMessage}</p>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
};

export default UpdateProductForm;
