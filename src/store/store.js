import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import todosReducer from './todosSlice';
import filterReducer from './filterSlice';
import storage from 'redux-persist/lib/storage';

const persistTodosConfig = {
  key: 'todos',
  storage,
  whitelist: ['items'],
};

const persistedTodosReducer = persistReducer(persistTodosConfig, todosReducer);

export const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
