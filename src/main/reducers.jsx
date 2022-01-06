import { combineReducers } from "redux";

const rootReducer = combineReducers({
    //função reducer fixa com summary representando o valor inicial
    dashboard: ()=>({summary: {credit: 100, debt: 50}})
})
export default rootReducer