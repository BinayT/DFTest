import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null
}

export const userTokenSlice = createSlice({
    name: 'userStatus',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = userTokenSlice.actions

export default userTokenSlice.reducer

