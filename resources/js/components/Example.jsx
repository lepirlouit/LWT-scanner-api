import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.tsx'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#eb0029",
        },
        secondary: {
            main: "#0000ff",
        },
    },
});

import { Box } from "@mui/material";
function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <ThemeProvider theme={defaultTheme}>
                <Box sx={{ display: "flex" }}>
                    {/* <Example /> */}
                    <App />
                </Box>
            </ThemeProvider>
        </React.StrictMode>
    );
}
