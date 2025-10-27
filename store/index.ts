import { configureStore } from "@reduxjs/toolkit";
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import recommendedSlice from './modules/recommended'
import playerSongDetailSlice from './modules/playerSongDetail'
const store=configureStore({
    reducer:{
        recommended:recommendedSlice,
        playerSongDetail:playerSongDetailSlice
    }, 
    devTools:true  
})
type GetStateType=typeof store.getState
type GetDispatchType=typeof store.dispatch
export type FnStateType=ReturnType<GetStateType>
export const useAppSelector:TypedUseSelectorHook<FnStateType>=useSelector
export const useAppDispatch:()=>GetDispatchType=useDispatch
export const appShallowEqual=shallowEqual
export default store