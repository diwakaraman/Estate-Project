import {createSlice, current} from '@reduxjs/toolkit'; 

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSatart: (state) => {
      state.loading = true;
    },
    signInsuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const { signInSatart, signInsuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
