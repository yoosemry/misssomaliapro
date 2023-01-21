import { useState } from 'react';
import Modal from 'react-modal';
import { BiPlus ,BiMinus ,BiX } from "react-icons/bi"
import { useSelector , useDispatch } from 'react-redux';
import { modalHandle  } from '../feutures/modal/modelSlice';
import {descriseVote ,increaseVote ,addvoteCounter ,clearstate} from "../feutures/competitor/competitorSlice"



      
  
      Modal.setAppElement('#root');


const Votemodol = () => {

  

    const {isOpen} = useSelector((state)=> state.modal )
    const {currentCompetitor , voteCount } = useSelector((state)=> state.competitor)
  const dispatch = useDispatch();

 

 
  function closeModal() {
    dispatch(modalHandle())
  }

  const voteNow = ()=>{

     dispatch(modalHandle())
  }

   if(!currentCompetitor) return;

const fullName = currentCompetitor.FirstName + " " + currentCompetitor.MiddleName + " " + currentCompetitor.LastName;

  const backgroundStyle = {
    width: "100%",
    height: "450px",
    borderBottomRightRadius : "10px",
    overFlow: "hidden",
    backgroundImage: `linear-gradient(0deg , #128b4871 , rgba(0,0,0,0) 60%, rgba(0,0,0,0)) , url(${currentCompetitor.Photo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}

const submitHandle = (e)=>{
      e.preventDefault()
      dispatch(addvoteCounter(currentCompetitor.Id))
      dispatch(clearstate())
      closeModal();
     
}


  return (
<div>
      
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="vote-model"
        overlayClassName="vote-model__overlay"
      >
    <div className='vote-model__container'>

        <div className='vote-model__competitor_info'>

       <div style={backgroundStyle}  className="vote-model__profile"></div>
        
        <div className='vote-model__bio'>

        <div className='vote-model__divider'>
            <label htmlFor=''>name</label>
            <span> {fullName}</span>
        </div>

        <div className='vote-model__divider'>
            <label htmlFor=''>state</label>
            <span> {currentCompetitor.RepresentingState} </span>
        </div>

        <div className='vote-model__divider'>
            <label htmlFor=''>background study</label>
            <span>{currentCompetitor.PersonalBackground} </span>
        </div>

        <div className='vote-model__divider'>
            <label htmlFor=''>employment</label>
            <span> {currentCompetitor.EmploymentorSchool}</span>
        </div>

        </div>

        </div>

       <div className='vote-model__vote_container'>

        <div className='vote-model__vote-count'>

            <span>Purchase Votes</span>

            <div className='vote-model__vote_controls'>

            <button type='button' onClick={()=> dispatch(descriseVote()) }><BiMinus className='vote-model__icons' /></button>
                <span>{voteCount}</span>
         
                <button type='button' onClick={()=> dispatch(increaseVote()) }><BiPlus className='vote-model__icons'/></button>
            </div>

        </div>

        <form onSubmit={submitHandle}>

                <span>Pay with Evc, Zaad And Sahal </span>

                <input 
                type="number"
                max="9"
                placeholder='Enter Your Number'
                className='vote-model__form-conrtrol'
                />
                <button type='submit'>vote</button>
                </form>

       </div>
   
<div className='vote-model__close-box' onClick={voteNow}>
  <BiX className='vote-model__close' />
</div>

     </div>
      </Modal>
    </div>
  )
}

export default Votemodol