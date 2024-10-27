"use strict";

import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import ToDoItemsReduser from "./redux/slice/toDoItemsSlice.js";
import CounterReduser from "./redux/slice/counterSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App.js";
import "./styles.css";

const storageName = "toDoListItems";

const rootElement = document.getElementById("main");
const root = ReactDom.createRoot(rootElement);

const storageData = JSON.parse(localStorage.getItem(storageName));
const preloadedToDos = storageData || [];
const preloadedCounter = preloadedToDos?.length || 0;

const store = configureStore({
  reducer: {
    toDoItems: ToDoItemsReduser,
    counter: CounterReduser,
  },
  preloadedState: {
    toDoItems: preloadedToDos,
    counter: preloadedCounter,
  }
});

store.subscribe(() => {
  localStorage.setItem(storageName, JSON.stringify(store.getState().toDoItems));
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
