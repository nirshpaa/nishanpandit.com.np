import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useIPCountryClass } from "./hooks/use-ip-country";

const queryClient = new QueryClient();

const App = () => {
  const { loading, error } = useIPCountryClass();

  if (loading) {
    return <div className="flex items-center justify-center h-screen" style={{fontSize: "calc(4em + 1vmin)",}}>Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500" style={{fontSize: "calc(4em + 1vmin)",}}>Error: {error}</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
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
