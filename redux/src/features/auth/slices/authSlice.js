import {createSlice} from '@reduxjs/toolkit';

/**
 *
 * @type {{success: boolean, error: null, user: User}}
 */
const initialState = {
  user: {},
  error: null,
  success: false
}

const authSlice = createSlice({
  name: 'auths',
  initialState: initialState,
  reducers: {
    loginAuth(state, action) {
      state.user = action.payload
      state.success = true;
    },
    logoutAuth(state, action) {
      state.user = null;
      state.success = true;
    }
  },

  extraReducers(builder) {
    // builder
    // .addCase('loginAuth', (state, action) => {
    //   state.success = true;
    // })
    // .addCase('logoutAuth', (state, action) => {
    //   state.success = true;
    // })
  }
})

export const { loginAuth, logoutAuth } = authSlice.actions
export default authSlice.reducer