import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    userEmail: "",
  },
  reducers: {
    addUser: (state, action) => {
      console.log(state.userName);
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
