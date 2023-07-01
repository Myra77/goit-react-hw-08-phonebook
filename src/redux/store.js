import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from '../redux/contacts/contactsSlice';
import { filterReducer } from '../redux/contacts/filterSlice';
import { authReducer } from '../redux/auth/authSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);