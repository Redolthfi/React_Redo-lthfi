import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            {
                id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
                productName: "John",
                productCategory: "Doe",
                productFreshness: "Doe",
                productPrice: "Doe",
                image: "Doe",
                additionalDescription: "Doe",
            }
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            const { id, productName, productCategory, productFreshness, productPrice, image, additionalDescription } = action.payload;
            state.products.push({
                id,
                productName,
                productCategory,
                productFreshness,
                productPrice,
                image,
                additionalDescription
            });
        },
        deleteProduct: (state, action) => {
            const { no } = action.payload;
            state.products = state.products.filter((item) => item.no !== no);   
        }
        
    }
})


export const { addProduct } = productSlice.actions;
export const { deleteProduct } = productSlice.actions;
export default productSlice.reducer;