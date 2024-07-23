import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
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
    resetFilters: (state) => {
      return initialState
    },
  },
})

export const { setTitleFilter, resetFilters } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer
