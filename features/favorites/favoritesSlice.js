import { createSlice } from "@reduxjs/toolkit";

// toggle favorites (a case reducer function) recieves two parameters (state and actions). favorites is the state
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (favorites, action) => {
      if (favorites.includes(action.payload)) {
        return favorites.filter(
          (favorite) => favorite !== action.payload
        )
      } else {
        favorites.push(action.payload)
      }
    }
  }
})

export const { toggleFavorite } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer