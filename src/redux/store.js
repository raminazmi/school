import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './features/theme/colorSlice';
import darkModeReducer from './features/theme/darkModeSlice';
import TransparentEffectReducer from './features/theme/TransparentEffectSlice';
import openReducer from './features/theme/openSlice';

export default configureStore({
  reducer: {
    color: colorReducer,
    darkMode: darkModeReducer,
    TransparentEffect: TransparentEffectReducer,
    open: openReducer,
  },
});