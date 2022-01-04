import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuLiveLentaState {
  open: boolean,
  x?: number,
  y?: number,
  side?: string,
  front?: string,
  frontPos?: number
}
const initialState: MenuLiveLentaState = {
  open: false,
  x: 0,
  y: 0,
  side: 'left',
  front: 'top',
  frontPos: 20
}
export const menuLiveLentaSlice = createSlice({
  name: 'menuLiveLenta',
  initialState: initialState,
  reducers: {
    onMenu: (state, action: PayloadAction<MenuLiveLentaState>) => {
      const { open, x, y, side, front, frontPos } = action.payload
      state.open = open
      state.x = x
      state.y = y
      state.side = side
      if (front) {
        state.front = front
      }
      if (frontPos) {
        state.frontPos = frontPos
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { onMenu } = menuLiveLentaSlice.actions

export default menuLiveLentaSlice.reducer