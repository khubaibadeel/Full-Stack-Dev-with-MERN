import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialBlogs } from "../data/initialBlogs";

// A local Promise represents an API request and makes loading/error visible.
export const loadBlogs = createAsyncThunk(
  "blogs/loadBlogs",
  async (options = {}, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 650));
      if (options.simulateFailure)
        throw new Error("Simulated connection failure");
      return initialBlogs;
    } catch {
      return rejectWithValue("Could not load blogs. Please retry.");
    }
  },
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    searchText: "",
    selectedCategory: "All",
    loading: false,
    error: null,
  },
  reducers: {
    addBlog(state, action) {
      state.blogs.push(action.payload);
    },
    deleteBlog(state, action) {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    toggleFeatured(state, action) {
      const blog = state.blogs.find((item) => item.id === action.payload);
      if (blog) blog.featured = !blog.featured;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(loadBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? action.error.message ?? "Could not load blogs.";
      });
  },
});

export const {
  addBlog,
  deleteBlog,
  toggleFeatured,
  setSearchText,
  setCategory,
  setError,
} = blogSlice.actions;
export default blogSlice.reducer;
