import { configureStore } from '@reduxjs/toolkit'
import { campsitesReducer } from '../features/campsites/campsitesSlice'
import { commentsReducer } from '../features/comments/commentsSlice'
import { partnersReducer } from '../features/partners/partnersSlice'
import { promotionsReducer } from '../features/promotions/promotionsSlice'

// keys in the store can be accessed by using useSelector and calling state.<key> eg: state.campsite

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer, 
    partners: partnersReducer,
    promotions: promotionsReducer
  }
})