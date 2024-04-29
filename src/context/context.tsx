import React,  { createContext, useState } from 'react';
import {PaletteMode} from '@mui/material';

// interface IProps {
//     children: any;
// }


// Define the type for your context value
interface ContextValue {
    rockButton: boolean;
    setRockButton: React.Dispatch<React.SetStateAction<boolean>>;
    paperButton: boolean;
    setPaperButton: React.Dispatch<React.SetStateAction<boolean>>;
    scissorsButton: boolean;
    setScissorsButton: React.Dispatch<React.SetStateAction<boolean>>;
    mode: PaletteMode;
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
  }
// Create the context with a default value
export const MainContext = createContext<ContextValue>({
    rockButton: false,
    setRockButton: () =>{} ,
    paperButton: false,
    setPaperButton: () => {},
    scissorsButton: false,
    setScissorsButton: () => {},
    mode: "light",
    setMode: () => {},
  });

const Context = ({children} : {children:React.ReactNode}) => {
  const [rockButton, setRockButton] = useState(false);
  const [paperButton, setPaperButton] = useState(false);
  const [scissorsButton, setScissorsButton] = useState(false);
  const [mode, setMode] = useState<PaletteMode>("light");


    return (
        <MainContext.Provider value={{rockButton,setRockButton,paperButton,setPaperButton,scissorsButton,setScissorsButton, mode, setMode}}>
            {children}
        </MainContext.Provider>
    )
}