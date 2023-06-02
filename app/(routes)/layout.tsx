"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import MyAppBar from "../AppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <MyAppBar />
      {children}
    </ThemeProvider>
  );
}
