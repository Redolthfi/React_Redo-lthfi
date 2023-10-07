import { useState } from "react";
import AllInput from "../Component/InputanLabel";
import SelectInput from "../Component/SelectInput";
import RadioInput from "../Component/InputRadio";
import InputArea from "../Component/InputArea";
import Button from "../Component/Button";
import { v4 as uuidv4 } from "uuid"; 
import {Link} from "react-router-dom";



const Forms = () => {

    const [errors, setErrors] = useState("");
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productFreshness, setProductFreshness] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState({
        productName: "",
        productCategory: "",
        productFreshness: "",
        productPrice: "",
    })

    
    const handleAdd = (e) => {
      e.preventDefault(); 
      const uniqueNo = uuidv4();

      const newDataItem = {
        no: uniqueNo,
        ...newData,
      };
  
      setData([...data, newDataItem]);
  
      setNewData({
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
    
    const handleProductName = (e) => {
      const { name, value } = e.target;
      setNewData({
        ...newData,
        [name]: value,
      });
        setProductName(value);
        setProductCategory(value);
        setProductFreshness(value);
        setProductPrice(value);


        if (value.length === 0) {
          setErrors("Product Name tidak boleh kosong");
        } else if (value.length === 25 ) {
          setErrors("Max");
        } else if (value.length > 10 ) {
          setErrors("Product must not exceed 25 characters.");
        } else {
          setErrors("");
        } setNewData({ ...newData, [e.target.name]: e.target.value });
      };
    return (
      <>
        <form onSubmit={handleAdd}>
            <AllInput type="text" placeholder="First Name" name="productName" label="First Name" value={newData.productName} maxLength={25} onChange={handleProductName} />
            <span style={{ color: "red",  }}>{errors}</span>
            <SelectInput value={newData.productCategory} onChange={handleProductName} name="productCategory" />
            <AllInput type="file" placeholder="" name="firstName" label="Image of product" />
            <RadioInput value={newData.productFreshness} onChange={handleProductName} name="productFreshness" label="Freshness" />
            <InputArea/>
            <AllInput type="number" placeholder="1$" name="productPrice" label="Product price" value={productPrice} onChange={handleProductName}/>
            <Button children="Random Number"/>
            <div className="mx-auto flex justify-center mt-4">
            <button className="bg-blue-600  text-white font-semibold py-2 px-4 rounded-lg"><Link to="/LandingPages">Pindah ke halaman Landing Pages</Link></button>

            </div>
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
              <th>Action</th>
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
