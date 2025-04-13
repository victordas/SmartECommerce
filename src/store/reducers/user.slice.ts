import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../models";
import { User } from "firebase/auth";

const initialState: UserState = {
    userData: { }
}

const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setuserData: (state, action: PayloadAction<Partial<User>>) => {
            state.userData = action.payload
        }
    }
})

const { reducer: userReducer, actions } = userSlice
const { setuserData } = actions

export { userReducer, setuserData}