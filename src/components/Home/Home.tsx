import React, {SetStateAction} from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";
import HomeStyles from "./HomeStyles"
import {PaletteMode} from '@mui/material';

// interface HomeProps {
//     mode:string;
//     setMode: React.Dispatch<SetStateAction<PaletteMode>>;
// }

const Home = ()=> {
   
    
    return (
        <>
        <Header />
        <Section />
        <Footer />
        </>
    )
}

export default Home;