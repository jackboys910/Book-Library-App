import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload }
      // можно написать просто state.title = action.payload
      // потому что redux toolkit использует npm пакет immer (библиотеку)
      // который создает новый объект при изменении
      // текущего объекта state
      // так что с reduxSlices можно изменять текущее состояние
    },
    resetFilters: () => {
      return initialState
    },
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload }
    },
    setOnlyFavoriteFilter: (state) => {
      return { ...state, onlyFavorite: !state.onlyFavorite }
    },
  },
})

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export const selectAuthorFilter = (state) => state.filter.author

export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
