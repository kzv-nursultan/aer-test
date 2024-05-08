import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { EmployeeData } from "./slices/employeeData";
import { employeesApi } from "./api/employeeApi";

const rootReducer = combineReducers({
  employee: EmployeeData.reducer,
  [employeesApi.reducerPath]: employeesApi.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(employeesApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
