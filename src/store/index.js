import { configureStore } from "@reduxjs/toolkit";
import jobPostReducer from "./job-post-slice";

export const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
  },
});
