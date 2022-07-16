import { configureStore, applyMiddleware } from "@reduxjs/toolkit"

import { userTokenSlice } from './slices/userTokenSlice'

export const store = configureStore({
    reducer: {
        userToken: userTokenSlice
    }
})