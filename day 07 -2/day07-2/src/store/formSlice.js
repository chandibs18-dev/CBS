import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for form submission
export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/post/contacts", formData, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: "Network error" });
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    message: "",
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    updateForm: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.message = "";
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || "Something went wrong";
      });
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
