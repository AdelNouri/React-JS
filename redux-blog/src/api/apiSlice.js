import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:9000"}),
    endpoints: builder => ({
        getBlogs: builder.query({query: () => "/blogs"}),
        getBlog: builder.query({query: (blogId) => `/blogs/${blogId}`}),
        addNewBlog: builder.mutation({query: blog => ({
            url: "/blogs",
            method: "POST",
            body: blog 
        })})
    })
})

export const {useGetBlogsQuery, useGetBlogQuery, useAddNewBlogMutation} = apiSlice