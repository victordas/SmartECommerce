import { User } from "firebase/auth";

export interface UserState {
    userData: Partial<User>
}