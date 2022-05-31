import "./App.css";
import React, { useState, useRef } from "react";
import styled from 'styled-components'
import { FaFileExport, FaGripLines } from "react-icons/fa";


function App() {
  
  const [isActive, setIsActive] = useState(false);
  function jump(e){
    e.preventDefault()
    setIsActive(!isActive)
  }
  const MidContainer = styled.div`
    display: flex,
  `
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    .burger{
      display: none
    }
    
  
    @media(max-width: 800px){
      display: flex;
      flex-direction: row;

      .midOne{
        display: ${props => isActive? 'flex':'none' };
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position: fixed;
        top: 3.5rem;
        
      }
      .mid{
        display: none;
      }
      .burger{
        display: flex;
        background-color: red;
        animation:spin 4s linear infinite;
      }
      .show{
        display:flex
      }
      @keyframes spin { 100% { -moz-transform: rotate(180deg); } }
     
      }
    }
  `
  return (
    <Container>
      <div>
        <h1>Coding Addict</h1>
      </div>


      <MidContainer className= 'midOne'>
        <h4 style={{marginRight: '1rem'}}>Home</h4>
        <h4 style={{marginRight: '1rem'}}>About</h4>
        <h4 style={{marginRight: '1rem'}}>Project</h4>
        <h4 style={{marginRight: '1rem'}}>Contact</h4>
        <h4 style={{marginRight: '1rem'}}>Profile</h4>
      </MidContainer>


      <div className='mid'>
        <a href="">logo</a>
        <a href="">logo</a>
        <a href="">logo</a>
        <a href="">logo</a>
      </div>

      <div className='burger' style={{color: 'black', width: '2rem', fontSize: '3rem', marginRight: '2rem'}}> 
        <FaGripLines onClick={(e)=>jump(e)}  />
      </div>
    </Container>
  );
}

export default App;
