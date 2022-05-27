import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    fetchComments: builder.query({
      query: (postId) => `/posts/${postId}/comments`,
      providesTags: ["Posts"],
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useFetchPostsQuery, useFetchCommentsQuery, useAddPostMutation } =
  postsApi;
