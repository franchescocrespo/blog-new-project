import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MiLayout } from "./components/MiLayout";
import { Home } from "./pages/Home";
import { AurkezpenGutuna } from "./pages/AurkezpenGutuna";
import { Aholkuak } from "./pages/Aholkuak";
import { LanMerkatu } from "./pages/LanMerkatu";
import { Curriculum } from "./pages/Curriculum";
import { Inmigrazio } from "./pages/Inmigrazio";
import { Podcast } from "./pages/Podcast";

export default function App() {
    const navigate = useNavigate();
    return (
        <NextUIProvider navigate={navigate}>
            <MiLayout>
                <Routes>
                    <Route path="/blog-new-project" element={<Home />} />
                    <Route
                        path="/blog-new-project/podcast"
                        element={<Podcast />}
                    />
                    <Route
                        path="/blog-new-project/curriculum"
                        element={<Curriculum />}
                    />
                    <Route
                        path="/blog-new-project/inmigrazio"
                        element={<Inmigrazio />}
                    />
                    <Route
                        path="/blog-new-project/aholkuak"
                        element={<Aholkuak />}
                    />
                    <Route
                        path="/blog-new-project/lan-merkatu-sarrera"
                        element={<LanMerkatu />}
                    />
                    <Route
                        path="/blog-new-project/aurkezpen-gutuna"
                        element={<AurkezpenGutuna />}
                    />
                </Routes>
            </MiLayout>
        </NextUIProvider>
    );
}
