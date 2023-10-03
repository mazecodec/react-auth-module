import {createSlice} from '@reduxjs/toolkit';

/**
 *
 * @type {{success: boolean, error: null, user: User}}
 */
const initialState = {
  user: null,
  error: null,
  success: false,
  loading: false
}

const authSlice = createSlice({
  name: 'auths',
  initialState: initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    stopLoading: (state, action) => {
      state.loading = false;
    },
    loginAuth(state, action) {
      state.user = action.payload.user
      state.success = action.payload.success || false;
      state.error = action.payload.error || null;
      state.loading = false;
    },
    logoutAuth(state, action) {
      state.user = null
      state.success = action?.payload?.success || false;
      state.error = action?.payload?.error || null;
      state.loading = false;
    },
  },
})

export const {
  startLoading,
  stopLoading,
  loginAuth,
  logoutAuth
} = authSlice.actions
export default authSlice.reducer