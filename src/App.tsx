import Home from "./components/Home/Home";
import { Box, ThemeProvider, createTheme, PaletteMode } from "@mui/material";
import { AppStyles } from "./AppStyles";
import { useContext, useState } from "react";
import { MainContext } from "./context/context";

const App = () => {
  const {mode,setMode} = useContext(MainContext)
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
    <ThemeProvider theme={darkTheme}>

      <Box sx={AppStyles.mainContainer}>
        <Home />
      </Box>
    </ThemeProvider>
    </>
  );
};

export default App;
