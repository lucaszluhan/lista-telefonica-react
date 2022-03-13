import { createStore, combineReducers } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import { contactsReducer } from './modules/contacts/reducer';
import { persistedReducers } from './persistor';

const combinedReducers = combineReducers({
  contacts: contactsReducer,
});

export const store = createStore(
  persistedReducers(combinedReducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
