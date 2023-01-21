import { MdHowToVote } from "react-icons/md";
import {   useDispatch } from "react-redux";
import { modalHandle } from "../feutures/modal/modelSlice";
import { setCompetitorCurrent } from "../feutures/competitor/competitorSlice";

const Competitor = ({competitor}) => {


    const dispatch = useDispatch();
    
    const backgroundStyle = {
        width: "100%",
        backgroundImage: `linear-gradient(0deg , #128b4871 , rgba(0,0,0,0) 60%, rgba(0,0,0,0)) , url(${competitor.Photo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    const voteNow = ()=>{
      dispatch(setCompetitorCurrent(competitor))
      dispatch(modalHandle())
    }

  return (
    <>
    
    <div className='Competitors__compotitor' style={backgroundStyle} title={`${competitor.FirstName} ${competitor.MiddleName} ${competitor.LastName}`}> 

        <div className='Competitors__info'>
        <span className='Competitors__name' >{competitor.FirstName +" " +competitor.LastName}</span>
        <span className='Competitors__state'>{competitor.RepresentingState}</span>

        <span className='Competitors__votes'>total voites: {competitor.NumberofVotes}</span>

     

       
    
        </div>
        <div className="Competitors__vote Competitors__vote--icon" onClick={voteNow}><MdHowToVote /></div>
        </div>

     </>
  )
}

export default Competitor