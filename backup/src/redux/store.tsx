import { configureStore } from '@reduxjs/toolkit'
import menuLiveLentaSliceReducer from './menuLiveLenta/menuLiveLentaSlice'

const store = configureStore({
  reducer: {
    menuLiveLenta: menuLiveLentaSliceReducer
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch