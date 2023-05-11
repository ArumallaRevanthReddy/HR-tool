import { configureStore, createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "cart",
    initialState: { selectedPage: "dashboard" },
    reducers: {
        setSelectedPage: (state, action) => {
            state.selectedPage = action.payload.selectedPage;
        }
    }
});

export const { setSelectedPage } = slice.actions;

export const store = configureStore({
    reducer: {
        cart: slice.reducer
    }
})