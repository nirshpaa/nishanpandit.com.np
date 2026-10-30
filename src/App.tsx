import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useIPCountryClass } from "./hooks/use-ip-country";
import IPCountryClass from "./components/IPCountryClass";

const queryClient = new QueryClient();

const App = () => {
  const { countryTheme, setCountryByCodeOrName, allThemes } = useIPCountryClass();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <IPCountryClass
          countryTheme={countryTheme}
          onSelectCountry={setCountryByCodeOrName}
          allThemes={allThemes}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
