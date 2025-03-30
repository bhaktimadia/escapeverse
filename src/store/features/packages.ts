"use client"
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks";

export type PackagesState = Array<{
    packageId: number;
    name: string;
}>;

const initialState: PackagesState = []


export const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {
        setPackages: (state: PackagesState, action: PayloadAction<PackagesState>) => {
            state = action.payload;
        }
    }
})


const { setPackages } = packagesSlice.actions
const selectPackage = (state: RootState) => state.packages


export const usePackagesStore = () => {
    const packages = useAppSelector(selectPackage)
    const dispacth = useAppDispatch()
    return {
        packages,
        setPackages: ((packages: PackagesState) => dispacth(setPackages(packages)))
    }
}


export default packagesSlice.reducer


