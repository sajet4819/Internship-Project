import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // To handle non-serializable values like API responses
    }),
});

export default store;