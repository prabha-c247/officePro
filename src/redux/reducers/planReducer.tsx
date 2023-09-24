import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Plan } from "../../helper/Types";
import { CreatePlan, GetAllPlans, ViewPlan } from "../../helper/ApiHelper";

interface PlanState {
  Plans: Plan[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PlanState = {
  Plans: [],
  loading: 'idle',
  error: null,
};

export const createPlanAsync = createAsyncThunk('plan/createPlan', async (newSchoolData: Partial<Plan>) => {
  try {
    const response = await CreatePlan(newSchoolData);
    return response.data as Plan;
  } catch (error) {
    throw error;
  }
});

export const singlePlanAsync = createAsyncThunk(
  'plan/singlePlan',
  async ({ id, inputData }: { id: number; inputData: Partial<Plan> }) => {
    try {
      const response = await ViewPlan(id, inputData);
      return response.data as Plan;
    } catch (error) {
      throw error;
    }
  }
);


export const planHistoryAsync = createAsyncThunk('plan/allPlans', async () => {
  try {
    const response = await GetAllPlans();
    return response.data as Plan[];
  } catch (error) {
    throw error;
  }
});

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    createPlan: (state, action: PayloadAction<Plan>) => {
      state.Plans.push(action.payload);
    },
    viewPlan: (state, action: PayloadAction<{ id: number; inputData: Partial<Plan> }>) => {
      const { id, inputData } = action.payload;
      const planIndex = state.Plans.findIndex((plan) => plan.id === id);
      if (planIndex !== -1) {
        state.Plans[planIndex] = { ...state.Plans[planIndex], ...inputData };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPlanAsync.fulfilled, (state, action) => {
        state.Plans.push(action.payload);
      })
      .addCase(singlePlanAsync.fulfilled, (state, action) => {
        const updatedPlanIndex = state.Plans.findIndex(plan => plan.id === action.payload.id);
        if (updatedPlanIndex !== -1) {
          state.Plans[updatedPlanIndex] = action.payload;
        }
      })
      .addCase(planHistoryAsync.fulfilled, (state, action) => {
        state.Plans = action.payload;
      })
      .addCase(createPlanAsync.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(createPlanAsync.rejected, (state, action) => {
        // Handle rejected state if needed
      });
  },
});

export const { actions: planActions, reducer: planReducer } = planSlice;

export default planSlice.reducer;