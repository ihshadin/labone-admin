import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  id: number;
  isAdmin: boolean;
  churchId: number;
  iat: number;
};

type TInitialState = {
  user: null | TUser;
  token: null | object;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    Logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, Logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const useSelectCurrentUser = (state: RootState) => state.auth.user;
