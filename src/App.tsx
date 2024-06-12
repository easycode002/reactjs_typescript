import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/organisms/Layouts/Layout";
import TailwindCss from "./pages/Tailwindcss/TailwindCSS";

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
                        {/* <Route path="/hover" element={<Hover/>}/> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;