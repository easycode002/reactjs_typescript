import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/organisms/Layouts/Layout";
import { Basic_Tailwind, Hover } from "./pages/Tailwind/Basic_Tailwind/Basic_Tailwind";

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
                        <Route path="/basic-tailwind" element={<Hover/>}/>
                        {/* <Route path="/hover" element={<Hover/>}/> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;