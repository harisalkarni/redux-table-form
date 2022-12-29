import { configureStore} from "@reduxjs/toolkit"
import usersReducer from "./pages/UserSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})