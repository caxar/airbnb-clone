import { createSlice } from "@reduxjs/toolkit";

export const authUserSlice = createSlice({
  name: "authUser",
  initialState: {
    items: [],
    userAuth: [],
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.userAuth = action.payload;
    },
  },
});

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { setAuthUser } = authUserSlice.actions;

export default authUserSlice.reducer;
