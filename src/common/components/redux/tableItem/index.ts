import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ItmState {
  itm: any
}

const initialState: ItmState = {
  itm: {},
}

export const tableItemSlice = createSlice({
  name: 'tableItem',
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<any>) => { 
        // const {userId, userNickame} = action.payload;
        state.itm = action.payload
     },
    removeItem: (state) => { 
        state.itm = initialState.itm
    }
  },
})

export const { addItem, removeItem } = tableItemSlice.actions

export const selectTableItem = (state: RootState) => state.tableItem

export default tableItemSlice.reducer