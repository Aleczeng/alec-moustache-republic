import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session';

const enhancers = [];
const middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage:storageSession
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default () => {
    const store = createStore(persistedReducer, composedEnhancers);
    return {store, persistor: persistStore(store)};
};
