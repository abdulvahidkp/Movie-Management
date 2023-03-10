import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import moviesReducer from '../features/movieSlice'

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,moviesReducer);

export const store = configureStore({
    reducer:persistedReducer,
    middleware:[thunk]
})

export const persistor = persistStore(store)
