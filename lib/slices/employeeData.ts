import { createSlice } from "@reduxjs/toolkit";

export const EmployeeData = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    setEmployeesList: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setEmployeesList } = EmployeeData.actions;

export default EmployeeData.reducer;
