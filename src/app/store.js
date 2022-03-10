import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from '../features/employees/employeesSlice';
import itemsReducer from '../features/items/itemsSlice';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    items: itemsReducer,
    comments: commentsReducer
  },
});
