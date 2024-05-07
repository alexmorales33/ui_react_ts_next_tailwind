import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UserPostData } from "./../reducers/userReducer/userTypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId: string) => {
    const response = await axios.get(`${API_URL}/bold-backend/user/${userId}`);
    return response.data as User;
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData: UserPostData) => {
    const response = await axios.post(`${API_URL}/user`, userData);
    return response.data as User;
  }
);

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const response = await axios.get(`${API_URL}/bold-backend/user`);
    return response.data as User;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, userData }: { userId: string; userData: User }) => {
    const response = await axios.put(
      `${API_URL}/bold-backend/user/${userId}`,
      userData
    );
    return response.data as User;
  }
);

export const updateUserRoles = createAsyncThunk(
  "user/updateUserRoles",
  async ({ userId, roles }: { userId: string; roles: string[] }) => {
    const response = await axios.put(
      `${API_URL}/bold-backend/user/${userId}/roles`,
      { roles }
    );
    return response.data as User;
  }
);
