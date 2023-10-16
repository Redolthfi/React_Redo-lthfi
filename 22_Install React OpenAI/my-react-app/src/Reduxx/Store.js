import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlices"; 

const store = configureStore({
    reducer: {
        products: productReducer,
    }
});
console.log("oncreate :", store.getState());

store.subscribe(() => {
    console.log("store change :", store.getState());
});

export default store;