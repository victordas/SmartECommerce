import { configureStore } from "@reduxjs/toolkit";
import { cartRecucer } from "./reducers/cart.slice";

const store = configureStore({
    reducer: {
        cartRecucer
    }
})

type RootState = ReturnType<typeof store.getState>;

export { store, RootState }