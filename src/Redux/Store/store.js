import { configureStore } from "@reduxjs/toolkit";
import { NewsReducer } from "../Reducer/news.reducer";
import createSagaMiddleware from 'redux-saga'
import { news } from '../Sagas/news.saga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: NewsReducer,
    middleware: (getMiddlewares) => getMiddlewares().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production" ? true : false
}
)
sagaMiddleware.run(news)
export default store;