import { useState } from "react";
import AllInput from "../Component/InputanLabel";
import SelectInput from "../Component/SelectInput";
import RadioInput from "../Component/InputRadio";
import InputArea from "../Component/InputArea";
import Button from "../Component/Button";
import { v4 as uuidv4 } from "uuid";



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
  })



  const handleProductImage = (e) => {
    const file = e.target.files[0];
    setProductImage(file);

    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(file.name)) {
      setErrorsFile("Tipe file gambar tidak valid. Pilih file gambar dengan ekstensi .jpg, .jpeg, .png, atau .gif.");
    } else {
      setErrorsFile("");
    }
  }


  const handleAdd = (e) => {
    e.preventDefault();
    const uniqueNo = uuidv4();

    if (!productImage) {
      alert("Pilih gambar produk terlebih dahulu.");
      return;
    } else if (newData.productFreshness === "") {
      alert("Pilih Freshness terlebih dahulu.");
      return;
    };



    const newDataItem = {
      no: uniqueNo,
      ...newData,
      productImage: productImage ? productImage.name : "",
    };

    setData([...data, newDataItem]);

    setNewData({
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
    });
    setProductImage(null);

  };
  const handleDelete = (no) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");

    if (confirmDelete) {
      const newData = data.filter((item) => item.no !== no);
      setData(newData);
    }
  };

  const handleProductName = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
    setNewData(value);

    const productPriceRegex = /^\d+(\.\d{1,2})?$/;

    if (!productPriceRegex.test(newData.productPrice)) {
      setErrorsPrice("Harga produk tidak valid. Harga produk harus berupa angka positif dan dapat memiliki maksimal dua angka desimal.");
    } else {
      setErrorsPrice("");
    };

    const productNameRegex = /^[A-Za-z0-9\s]{1,25}$/;

    if (!productNameRegex.test(newData.productName)) {
      setErrors("Nama produk tidak valid. Nama produk hanya boleh terdiri dari huruf, angka, dan spasi");
      return;
    } else {
      setErrors("");
    };


    if (value.length === 0) {
      setErrors("Product Name tidak boleh kosong");
    } else if (value.length === 25) {
      setErrors("Max");
    } else if (value.length > 10) {
      setErrors("Product must not exceed 10 characters.");
    } else {
      setErrors("");
    } setNewData({ ...newData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleAdd}>
        <AllInput type="text" placeholder="First Name" name="productName" label="First Name" value={newData.productName} maxLength={25} onChange={handleProductName} />
        <span style={{ color: "red", }}>{errors}</span>

        <SelectInput value={newData.productCategory} onChange={handleProductName} name="productCategory" />

        <AllInput type="file" placeholder="" name="firstName" label="Image of product" onChange={handleProductImage} />
         <span style={{ color: "red", }}>{errorsFile}</span>

        <RadioInput value={newData.productFreshness} onChange={handleProductName} name="productFreshness" label="Freshness" />

        <InputArea />

        <AllInput type="number" placeholder="1$" name="productPrice" label="Price" value={newData.productPrice} onChange={handleProductName} />
        <span style={{ color: "red", }}>{errorsPrice}</span>

        <Button children="Random Number" />
        <div className="flex justify-center px-10 mt-40">
          <button className="bg-blue-600  text-white font-semibold py-2 px-4 rounded w-full" onClick={handleAdd} type="submit">Submit</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Product Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.no}>
              <td>{index + 1}</td>
              <td>{item.productName}</td>
              <td>{item.productCategory}</td>
              <td>{item.productFreshness}</td>
              <td>{item.productPrice}</td>
              <td>{item.productImage}</td>
              <td>
                <button onClick={() => handleDelete(item.no)} className="bg-red-500 px-3 py-2 rounded-lg text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Forms;
