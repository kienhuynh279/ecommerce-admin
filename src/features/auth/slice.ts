import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { AccountState, User } from 'types/models/Account';

const initialState: AccountState = {
  // user: {
  //   user_email: '',
  //   user_id: '',
  //   user_name: '',
  //   user_password: '',
  // },
  user: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const getUserAuth = (state: RootState) => state.auth.user;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;