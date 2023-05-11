import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { campsitesReducer } from '../features/campsites/campsitesSlice'
import { commentsReducer } from '../features/comments/commentsSlice'
import { partnersReducer } from '../features/partners/partnersSlice'
import { promotionsReducer } from '../features/promotions/promotionsSlice'
import { favoritesReducer } from '../features/favorites/favoritesSlice'
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const config = {
  key: 'root',
  storage: AsyncStorage,
  debug: true //console logs messages to help with debugging
}


// keys in the store can be accessed by using useSelector and calling state.<key> eg: state.campsite
export const store = configureStore({
  reducer: persistCombineReducers(config, {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    favorites: favoritesReducer
  }),
  middleware: (getDefaultMiddleware) => //this function ignores several action types redux persist will dispatch to the store
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ]
      }
    })
})

export const persistor = persistStore(store)