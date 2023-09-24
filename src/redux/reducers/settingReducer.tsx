import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSettingPersonalDetails,passwordSecurity } from "../../helper/ApiHelper";
import { loginUserAsync } from "./userReducer"; // You may need to adjust the import path

const apiUrl = process.env.REACT_APP_BASE_URL;

export const getUserData = createAsyncThunk(
  'setting/getUserPersonalData',
  async () => {
    try {
      const response = await getSettingPersonalDetails(); // Make the API call
      return response.data; // Return the fetched data
    } catch (error) {
      console.error("getUserPersonalData call failed:", error);
      throw error;
    }
  }
);

export const changePassword = createAsyncThunk(
  'setting/changePassword',
  async () => {
    try {
      const response = await passwordSecurity(); // Make the API call
      return response.data; // Return the fetched data
    } catch (error) {
      console.error("changePassword call failed:", error);
      throw error;
    }
  }
);

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    profileImage: null as string | null,
    contactNumber: null as string | null,
    name: null as string | null,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        // Update the state with the fetched data
        const { profileImage, contactNumber, name } = action.payload;
        state.profileImage = profileImage;
        state.contactNumber = contactNumber;
        state.name = name;
        state.error = null;
      })
      .addCase(getUserData.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(getUserData.rejected, (state, action) => {
        // Handle rejected state if needed
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default settingSlice.reducer;
