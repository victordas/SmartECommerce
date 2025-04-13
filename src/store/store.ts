import { configureStore } from "@reduxjs/toolkit";
import { cartRecucer } from "./reducers/cart.slice";
import { userReducer } from "./reducers/user.slice";

const store = configureStore({
    reducer: {
        cartRecucer,
        userReducer
    }
})

type RootState = ReturnType<typeof store.getState>;

export { store, RootState }