// import "./App.css";
import GlobalStyle from "./globalStyle";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "styled-components";
import colorTheme from "./colorTheme";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <ThemeProvider theme={colorTheme}>
                <GlobalStyle />
                <RouterProvider router={router} />;
            </ThemeProvider>
        </>
    );
}

export default App;
