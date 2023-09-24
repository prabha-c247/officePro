import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GetAllSchools, AddSchool, EditSchool } from '../../helper/ApiHelper';
import { School } from '../../helper/Types';

interface SchoolState {
  schools: School[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SchoolState = {
  schools: [],
  loading: 'idle',
  error: null,
};

export const addSchoolAsync = createAsyncThunk('school/addSchool', async (newSchoolData: Partial<School>) => {
  try {
    const response = await AddSchool(newSchoolData);
    return response.data as School;
  } catch (error) {
    throw error;
  }
});

export const editSchoolAsync = createAsyncThunk(
  'school/editSchool',
  async ({ id, inputData }: { id: number; inputData: Partial<School> }) => {
    try {
      const response = await EditSchool(id, inputData);
      return response.data as School;
    } catch (error) {
      throw error;
    }
  }
);

export const getAllSchoolsAsync = createAsyncThunk('school/getAllSchools', async () => {
  try {
    const response = await GetAllSchools();
    return response.data as School[];
  } catch (error) {
    throw error;
  }
});

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    addSchool: (state, action: PayloadAction<School>) => {
      state.schools.push(action.payload);
    },
    editSchool: (state, action: PayloadAction<{ id: number; inputData: Partial<School> }>) => {
      const { id, inputData } = action.payload;
      const schoolIndex = state.schools.findIndex((school) => school.id === id);
      if (schoolIndex !== -1) {
        state.schools[schoolIndex] = { ...state.schools[schoolIndex], ...inputData };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSchoolAsync.fulfilled, (state, action) => {
        state.schools.push(action.payload);
      })
      .addCase(editSchoolAsync.fulfilled, (state, action) => {
        const updatedSchool = action.payload;
        const schoolIndex = state.schools.findIndex((school) => school.id === updatedSchool.id);
        if (schoolIndex !== -1) {
          state.schools[schoolIndex] = updatedSchool;
        }
      })
      .addCase(getAllSchoolsAsync.fulfilled, (state, action) => {
        state.schools = action.payload;
      })
      .addCase(addSchoolAsync.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(addSchoolAsync.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

export const { editSchool, addSchool } = schoolSlice.actions;
export default schoolSlice.reducer;
