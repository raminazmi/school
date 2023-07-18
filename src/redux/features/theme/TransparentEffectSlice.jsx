import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  TransparentEffect: localStorage.getItem('TransparentEffect') !== 'false', 
};

const TransparentEffectSlice = createSlice({
  name: 'TransparentEffect',
  initialState,
  reducers: {
    toggleTransparentEffectMode: (state) => {
      const newMode = !state.TransparentEffect;
      localStorage.setItem('TransparentEffect', newMode);
      state.TransparentEffect = newMode;
    },
  },
});

export const { toggleTransparentEffectMode } = TransparentEffectSlice.actions;
export default TransparentEffectSlice.reducer;
