import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: localStorage.getItem('selectedColor') || '#FFBA59',
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      const selectedColor = action.payload;
      state.color = selectedColor;
      localStorage.setItem('selectedColor', selectedColor);
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;