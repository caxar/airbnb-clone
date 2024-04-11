import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./authUser/authUserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
