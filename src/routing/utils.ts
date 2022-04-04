import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const handleRejectValues = (name: string, action: any) => createAsyncThunk(
  name,
  async (data: object | undefined, { rejectWithValue }) => {
    try {
      return await action(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const response = error.response;

        return rejectWithValue({
          status: response?.status,
          statusText: response?.statusText,
        });
      }

      return error;
    }
  },
);

export {
  handleRejectValues,
};