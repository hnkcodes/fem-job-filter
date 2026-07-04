import { createSlice } from "@reduxjs/toolkit";

const initialState = { jobs: [], filterArr: [] };

export const JobPostSlice = createSlice({
  name: "jobpost",
  initialState,
  reducers: {
    replaceJobData: (state, action) => {
      state.jobs = action.payload;
    },
    setFilter: (state, action) => {
      if (
        state.filterArr.find((arrItem) => arrItem.item === action.payload.item)
      )
        return;
      state.filterArr.push(action.payload);
    },
    clearFilter: (state) => {
      state.filterArr = [];
    },
    deleteFilterItem: (state, action) => {
      state.filterArr = state.filterArr.filter(
        (Arritem) => Arritem.item != action.payload.item,
      );
    },
  },
});

export const fetchData = function () {
  return async (dispatch) => {
    try {
      console.log("executed");
      const response = await fetch("/data.json");
      const data = await response.json();
      if (!response.ok) throw new Error();
      dispatch(JobPostSlice.actions.replaceJobData(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const jobPostActions = JobPostSlice.actions;

export default JobPostSlice.reducer;
