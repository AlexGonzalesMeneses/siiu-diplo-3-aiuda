import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../shared/comments';

const initialState = {
  comments: COMMENTS,
  value: 0,
  status: 'idle',
  currentComment: {},
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
      state.currentComment = action.payload;
    },
  },
});

export const { increment, currentComment, addComment } = commentsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.comments.value)`
export const selectComments = (state) => state.comments;

export default commentsSlice.reducer;
