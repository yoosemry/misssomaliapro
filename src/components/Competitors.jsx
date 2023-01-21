import { useSelector } from "react-redux"
import Competitor from "./Competitor"

const Competitors = () => {

  const {competitors} =useSelector((state)=> state.competitor);
  
  return(
    <div className='Competitors'>
    <div className='Competitors__header'>
        <span className="Competitors__title">miss somalia</span>
        <p className="Competitors__p">
        Build with react.js - the templete is well-structured ,
        thoightfully componentized the next.js project , 
        giving you a codebase thats productive and enjoybable to workd in
         .


        </p>
    </div>

    <div className='Competitors__Competitors'>

    {
      competitors.map((competitor,index)=>(
        
        <Competitor key={index} competitor={competitor}/>

        ))
        
    }


    </div>


    </div>
  )
}

export default Competitors