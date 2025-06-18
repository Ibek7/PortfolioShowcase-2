import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ParticlesBackground from "@/components/ParticlesBackground";
import NotFound from "@/pages/not-found";// Assuming your NotFound page is in pages/NotFound.tsx
import Home from "@/pages/Home";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/*
        BrowserRouter is used for applications with a dynamic server that can handle any URL.
        For GitHub Pages (a static host), `basename` is crucial. It tells React Router
        that your app is served from a subdirectory.
      */}
      <BrowserRouter basename="/PortfolioShowcase-2">
        <ParticlesBackground />
        {/* Routes component is a container for a collection of Route components */}
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<Home />} />
          {/* Catch-all route for 404 Not Found pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
