import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Users } from "./userTypes";

interface UserState {
  userDetail: User | null;
  allUsers: Users;
}

const initialState: UserState = {
  userDetail: null,
  allUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.userDetail = action.payload;
    },
    postUser: (state, action: PayloadAction<User>) => {
      state.userDetail = action.payload;
    },
    getAllUsers: (state, action: PayloadAction<Users>) => {
      state.allUsers = action.payload;
    },
  },
});

export const { getUser, postUser, getAllUsers } = userSlice.actions;
export default userSlice.reducer;
