import { createSlice,configureStore } from "@reduxjs/toolkit";



let slice=createSlice({
    name:"slice",
    initialState:{
model:false,
viewone:[]
    },
    reducers:{
        setmodel(store,action){
            store.model=true
        },
        closemodel(store,action){
            store.model=false
        },
        setonecarts(store,action){
            console.log(action);
            
            store.viewone=[action.payload]
            console.log(store.viewone);
            
        }
    }
})

export let reducers=slice.actions
let Store=configureStore(slice)
export default Store