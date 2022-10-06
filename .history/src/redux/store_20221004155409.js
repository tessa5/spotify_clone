import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { shazamCoreApi } from './services/shazamcore';

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
