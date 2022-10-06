import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { shazamCoreApi}

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
