import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice";
import { dndApi } from "../api/RTK-query";
const store = configureStore({
  reducer: { todo: todoReducer, [dndApi.reducerPath]: dndApi.reducer },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dndApi.middleware),
});
export default store;
