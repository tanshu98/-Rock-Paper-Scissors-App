import React, { useContext } from "react";
import { FooterStyles } from "./FooterStyles";
import { Box, Button } from "@mui/material";
import paperUser from "../../assets/Images/paper-user.jpg";
import rockUser from "../../assets/Images/rock-user.jpg";
import scissorsUsers from "../../assets/Images/scissors-user.jpg";
import { MainContext } from "../../context/context";

function Footer() {
  const {rockButton,setRockButton,paperButton,setPaperButton,scissorsButton,setScissorsButton} = useContext(MainContext);
  console.log(rockButton, paperButton, scissorsButton);
  console.log(setRockButton);
  

  const rockChangeHandler = ()=> {
    setRockButton(prevRockButton => !prevRockButton);
  }
  
  return (
    <>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', mt:35}}>
        <Button onClick={rockChangeHandler} >
        <img src={rockUser} alt="" />
        </Button>
        <img onClick={()=> setPaperButton(!paperButton)} src={paperUser} alt="" />
        <img onClick={()=> setScissorsButton(!scissorsButton)} src={scissorsUsers} alt="" />
      </Box>
    </>
  );
}

export default Footer;
