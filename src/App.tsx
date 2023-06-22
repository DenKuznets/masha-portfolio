import GlobalStyle from "./ts/globalStyle";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "styled-components";
import colorTheme from "./ts/colorTheme";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="projects/:id" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <ThemeProvider theme={colorTheme}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
