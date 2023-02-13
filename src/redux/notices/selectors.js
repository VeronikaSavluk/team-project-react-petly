import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.notices.items;

export const selectUserItems = state => state.notices.userItems;

export const selectFavoriteItems = state => state.notices.myFavoriteItems;

export const selectItemById = state => state.notices.noticesById;

export const selectIsLoading = state => state.notices.isLoading;

export const selectError = state => state.notices.error;

export const selectFilterNotices = state => state.filterNotices.query;

export const selectCurrentNotices = state => state.filterNotices.currentNotices;

export const selectVisibleNotices = createSelector(
  [selectCurrentNotices, selectFilterNotices],
  (currentNotices, setFilterNotices) => {
    switch (setFilterNotices) {
      case setFilterNotices:
        return currentNotices.filter(notice => notice.title.toLowerCase().includes(setFilterNotices));
      default:
        return currentNotices;
    }
  }
);