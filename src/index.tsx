import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDom2 from 'react-dom'
// import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import theme from "./styles/Theme.Styled";
import {GlobalStyles} from "./styles/GlobalStyles";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <App/>
    </ThemeProvider>
);

// ReactDom2.render(<Counter/>, document.querySelector('#root'))
