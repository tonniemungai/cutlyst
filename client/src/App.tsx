import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PortfolioDetail from "./pages/PortfolioDetail";
import IndustryBusiness from "./pages/IndustryBusiness";
import IndustryTechnology from "./pages/IndustryTechnology";
import IndustryMakeMoney from "./pages/IndustryMakeMoney";
import IndustryAgency from "./pages/IndustryAgency";
import IndustryNewsletters from "./pages/IndustryNewsletters";
import IndustryFinance from "./pages/IndustryFinance";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/portfolio/:id"} component={PortfolioDetail} />
      <Route path={"/industry/business"} component={IndustryBusiness} />
      <Route path={"/industry/technology"} component={IndustryTechnology} />
      <Route path={"/industry/make-money"} component={IndustryMakeMoney} />
      <Route path={"/industry/agency"} component={IndustryAgency} />
      <Route path={"/industry/newsletters"} component={IndustryNewsletters} />
      <Route path={"/industry/finance"} component={IndustryFinance} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
