import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
const Tabel = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    no: "",
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "", 
  });

  // async function getData() {
  //   const req = await fetch("https://6522e736f43b1793841509a0.mockapi.io/api/v1/users",{
  //     method: "GET"
  //   });
  //   const data = await req.json();
  //   setData(data);
  // }

  // useEffect(() => {
  //   getData();    
  // })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };
  

  const handleAdd = () => {
    const uniqueNo = uuidv4();

    const newDataItem = {
      no: uniqueNo,
      ...newData,
    };

    setData([...data, newDataItem]);

    setNewData({
      no: "",
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
    });
  };

  const handleDelete = (no) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");

    if (confirmDelete) {
      const newData = data.filter((item) => item.no !== no);
      setData(newData);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={newData.productName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productCategory"
          placeholder="Product Category"
          value={newData.productCategory}
          onChange={handleChange}
        />
        {/* Tambahkan input untuk bidang lainnya */}    
        <button onClick={handleAdd} className="bg-blue-500 px-3 py-2 rounded-lg mt-3 text-white ml-3">Tambah Data</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.productName}</td>
              <td>{item.productCategory}</td>
              <td>{item.productFreshness}</td>
              <td>{item.productPrice}</td>
              <td>
                <button onClick={() => handleDelete(item.no)} className="bg-red-500 px-3 py-2 rounded-lg text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
