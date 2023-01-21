import { createSlice } from "@reduxjs/toolkit";
import compotetors from "../../assets/compotetors.json"
const initialState = {
    competitors : JSON.parse(window.localStorage.getItem("competitors")) || compotetors,
    currentCompetitor : null,
    voteCount : 0
}

const competitorSlice = createSlice({
    name : "competitor",
    initialState ,
    reducers : {
        setCompetitorCurrent : (state , action)=>{
            state.currentCompetitor = action.payload
        },
        increaseVote : (state)=>{
            state.voteCount ++
        },
        descriseVote : (state)=>{
            state.voteCount --
        },
        addvoteCounter : (state , action)=>{
            let comIndex = state.competitors.findIndex(com => com.Id === action.payload)

            state.competitors[comIndex].NumberofVotes = Number(state.competitors[comIndex].NumberofVotes) + Number(state.voteCount);
            window.localStorage.setItem("competitors" , JSON.stringify(state.competitors))
        } ,
        clearstate : (state)=>{
                state.currentCompetitor = null;
                state.voteCount = 0
        }
    }
})


export default competitorSlice.reducer;
export const {setCompetitorCurrent ,descriseVote ,increaseVote ,addvoteCounter ,clearstate} = competitorSlice.actions