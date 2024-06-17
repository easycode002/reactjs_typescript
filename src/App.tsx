import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/organisms/Layouts/Layout";
import TailwindCss from "./pages/Tailwindcss/TailwindCSS";
import Grid_Tailwind from "./pages/Tailwindcss/Tailwind-css-grid";
import Button_Component from "./pages/test-component/button-component";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* root route in project */}
                    <Route path="/" element={<Layout/>}>
                        <Route />
                    </Route>
                </Routes>
            </BrowserRouter>

            <BrowserRouter>
                <Routes>
                    {/* root route in project */}
                    <Route>
                        <Route path="/tailwind-css" element={<TailwindCss/>}/>
                        <Route path="/tailwindcss-grid" element={<Grid_Tailwind/>}/>
                        <Route path="/test-component" element={<Button_Component/>}/>
                        {/* <Route path="/hover" element={<Hover/>}/> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;