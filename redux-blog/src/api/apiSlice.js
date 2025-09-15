import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["BLOG"],
  endpoints: (builder) => ({
    getBlogs: builder.query({ query: () => "/blogs", providesTags: ["BLOG"] }),
    getBlog: builder.query({ query: (blogId) => `/blogs/${blogId}` }),
    addNewBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["BLOG"],
    }),
    editBlog: builder.mutation({
      query: (blog) => ({
        url: `/blogs/${blog.id}`,
        method: "PUT",
        body: blog,
      }),
    //   invalidatesTags: ["BLOG"],
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery, useAddNewBlogMutation, useEditBlogMutation } =
  apiSlice;
