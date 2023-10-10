import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../Reduxx/slices/productSlices";

const TabelProduct = (props) => {
    const { data } = props;
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const handleDeleteClick = (no) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");

        console.log("Deleting product with ID:", no); // Cetak ID produk yang akan dihapus

        if (confirmDelete) {
            // Panggil tindakan deleteProduct dengan ID produk yang akan dihapus
            dispatch(deleteProduct(no));
        }
    };

    return (
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
                            <button onClick={() => handleDeleteClick(item.no)} className="bg-red-500 px-3 py-2 rounded-lg text-white">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelProduct;
