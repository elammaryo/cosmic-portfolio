import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <ThemeProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <SpeedInsights />
    </>
  );
}

export default App;
