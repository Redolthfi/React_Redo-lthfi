import { useState, useEffect } from "react";
import AllInput from "../Component/InputanLabel";
import SelectInput from "../Component/SelectInput";
import RadioInput from "../Component/InputRadio";
import InputArea from "../Component/InputArea";
import Button from "../Component/Button";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 dari uuid
import { useDispatch } from "react-redux";
import TabelProduct from "./TabelProduct";
import axios from "axios";


const Forms = () => {
  const [errors, setErrors] = useState("");
  const [errorsFile, setErrorsFile] = useState("");
  const [errorsPrice, setErrorsPrice] = useState("");
  const [data, setData] = useState([]);
  const [productImage, setProductImage] = useState(null);
  const [newData, setNewData] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
  });

  const [editProductId, setEditProductId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://6522e736f43b1793841509a0.mockapi.io/api/v1/product");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleProductImage = (e) => {
    const file = e.target.files[0];
    setProductImage(file);

    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(file.name)) {
      setErrorsFile("Tipe file gambar tidak valid. Pilih file gambar dengan ekstensi .jpg, .jpeg, .png, atau .gif.");
    } else {
      setErrorsFile("");
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const uniqueNo = uuidv4();

    if (!productImage) {
      alert("Pilih gambar produk terlebih dahulu.");
      return;
    } else if (newData.productFreshness === "") {
      alert("Pilih Freshness terlebih dahulu.");
      return;
    }

    const postData = {
      no: uniqueNo,
      ...newData,
      productImage: productImage ? productImage.name : "",
    };

    try {
      const response = await axios.post("https://6522e736f43b1793841509a0.mockapi.io/api/v1/product", postData);

      console.log("Response:", response.data);

      setData([...data, postData]);

      setNewData({
        productName: "",
        productCategory: "",
        productFreshness: "",
        productPrice: "",
      });
      setProductImage(null);
      alert("Data produk tersimpan.");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = async () => {
    try {
      if (!productImage) {
        alert("Pilih gambar produk terlebih dahulu.");
        return;
      } else if (newData.productFreshness === "") {
        alert("Pilih Freshness terlebih dahulu.");
        return;
      }

      const editedData = {
        ...newData,
        productImage: productImage ? productImage.name : "",
      };

      const response = await axios.put(`https://6522e736f43b1793841509a0.mockapi.io/api/v1/product/${editProductId}`, editedData);

      console.log("Response:", response.data);

      const updatedData = data.map((item) => (item.id === editProductId ? editedData : item));

      setData(updatedData);

      setNewData({
        productName: "",
        productCategory: "",
        productFreshness: "",
        productPrice: "",
      });
      setProductImage(null);
      setEditProductId(null);
      setIsEditing(false);
      alert("Data produk berhasil diperbarui.");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleProductName = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });

    const productPriceRegex = /^\d+(\.\d{1,2})?$/;

    if (!productPriceRegex.test(value)) {
      setErrorsPrice("Harga produk tidak valid. Harga produk harus berupa angka positif dan dapat memiliki maksimal dua angka desimal.");
    } else {
      setErrorsPrice("");
    }

    const productNameRegex = /^[A-Za-z0-9\s]{1,25}$/;

    if (!productNameRegex.test(value)) {
      setErrors("Nama produk tidak valid. Nama produk hanya boleh terdiri dari huruf, angka, dan spasi");
    } else {
      setErrors("");
    }
  };

  const handleEditClick = (id) => {
    const selectedData = data.find((item) => item.id === id);
    if (selectedData) {
      setEditProductId(id);
      setIsEditing(true);
      setNewData({
        productName: selectedData.productName,
        productCategory: selectedData.productCategory,
        productFreshness: selectedData.productFreshness,
        productPrice: selectedData.productPrice,
      });
    }
  };

  return (
    <>
      <form onSubmit={isEditing ? handleEdit : handleAdd}>
        <AllInput type="text" placeholder="Product Name" name="productName" label="Product Name" value={newData.productName} maxLength={25} onChange={handleProductName} />
        <span style={{ color: "red" }}>{errors}</span>

        <SelectInput value={newData.productCategory} onChange={handleProductName} name="productCategory" />

        <AllInput type="file" placeholder="" name="firstName" label="Image of product" onChange={handleProductImage} />
        <span style={{ color: "red" }}>{errorsFile}</span>

        <RadioInput value={newData.productFreshness} onChange={handleProductName} name="productFreshness" label="Freshness" />

        <InputArea />

        <AllInput type="number" placeholder="1$" name="productPrice" label="Price" value={newData.productPrice} onChange={handleProductName} />
        <span style={{ color: "red" }}>{errorsPrice}</span>

        <Button children="Random Number" />

        <div className="flex justify-center px-10 mt-40">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full" type="submit">
            {isEditing ? "Edit Product" : "Submit"}
          </button>
        </div>
      </form>
      <TabelProduct data={data} onEditClick={handleEditClick} />
    </>
  );
};

export default Forms;
