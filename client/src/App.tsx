import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ParticlesBackground from "@/components/ParticlesBackground";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  // The base path should match your repository name if deploying to GitHub Pages
  // e.g., https://username.github.io/reponame/
  return (
    <WouterRouter base="/PortfolioShowcase-2">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ParticlesBackground />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
