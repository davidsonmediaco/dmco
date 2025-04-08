import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Portraits from "@/pages/Portraits";
import Music from "@/pages/Music";
import Brands from "@/pages/Brands";
import Dogs from "@/pages/Dogs";
import Sports from "@/pages/Sports";
import Admin from "@/pages/Admin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portraits" component={Portraits} />
      <Route path="/music" component={Music} />
      <Route path="/brands" component={Brands} />
      <Route path="/dogs" component={Dogs} />
      <Route path="/sports" component={Sports} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
