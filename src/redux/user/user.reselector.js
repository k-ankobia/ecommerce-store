import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectCart = (state) => state.hidden;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
