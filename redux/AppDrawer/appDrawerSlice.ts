import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DrawerState {
  rightDrawerState: string
}

const initialState = { 
  rightDrawerState: '',
} as DrawerState

const drawerSlice = createSlice({
  name: 'rightDrawerState',
  initialState,
  reducers: {
      toggleRightDrawer: (state) => {
      state.rightDrawerState = 'toggle'
    },
      resetRightDrawer: (state) => {
      state.rightDrawerState = ''
    },
      openRightDrawer: (state) => {
      state.rightDrawerState = 'open'
    }
  },
})

export const { toggleRightDrawer, resetRightDrawer, openRightDrawer } = drawerSlice.actions
export default drawerSlice.reducer