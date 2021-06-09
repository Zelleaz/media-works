import { Context, createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

const middleware = [thunk]

export const makeStore = () => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper(makeStore)