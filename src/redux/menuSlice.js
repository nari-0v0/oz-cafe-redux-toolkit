import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: { list: [] },
  reducers: {
    setMenu(state, { payload }) {
      state.list = payload;
    },
    addMenuItem(state, { payload }) {
      state.list.push(payload);
    },
    removeMenuItem(state, { payload }) {
      state.list = state.list.filter((i) => i.id !== payload);
    },
  },
});

export const { setMenu, addMenuItem, removeMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
