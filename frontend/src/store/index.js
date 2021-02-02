import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import appReducer from './slices/appSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
