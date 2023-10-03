import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';
export const API_URI = "https://dummyjson.com/";
export const apiDelay = ms => new Promise(r => setTimeout(r, ms));

const baseQuery = fetchBaseQuery({
  baseUrl: API_URI,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState().auth?.user?.token

    if (token) {
      headers.set('Authentication', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth', 'Posts'],
  endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test',
  }),
})


export default api;