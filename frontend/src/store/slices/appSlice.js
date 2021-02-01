import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    sidebarShow: 'responsive'
  },
  reducers: {
    set: (state, action )=> {
          state.sidebarShow = action.payload
    }
  },
});


export const { set } = appSlice.actions;
export const selectSidebarShow = state => state.app.sidebarShow;

export default appSlice.reducer;