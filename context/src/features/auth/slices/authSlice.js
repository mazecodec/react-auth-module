import {createSlice} from '@reduxjs/toolkit';

/**
 * @typedef {object} User
 */
const User = {

}

/**
 *
 * @type {{success: boolean, error: null, user: User}}
 */
const initialState = {
  user: User,
  error: null,
  success: false
}

const authSlice = createSlice({
  name: 'auths',
  initialState: initialState,
  reducers: {
    loginAuth(state, action) {
      const {user} = action.payload
      state.user = user
      state.success = true;
    },
  },

  extraReducers(builder) {

  }
})

export const { loginAuth } = authSlice.actions
export default authSlice.reducer