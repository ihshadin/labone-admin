import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  id: number;
  admin: boolean;
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCurrentToken = (state: any) => state.auth.token;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSelectCurrentUser = (state: any) => state.auth.user;
