import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-dvh flex items-center justify-center bg-[#0b0b0f] text-[hsl(var(--foreground))] px-6">
      <div className="max-w-md w-full p-8 rounded-2xl bg-[#111117] border border-white/[0.08] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[hsl(var(--accent))]">
          <Compass className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
          <span>HTTP 404 · Route Not Found</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[hsl(var(--foreground))] m-0">
          This route does <em>not</em> exist.
        </h1>

        <p className="text-sm text-[hsl(var(--muted-foreground))] m-0">
          The requested path <code className="text-[hsl(var(--accent))]">{location.pathname}</code> could not be located on nishanpandit.com.np.
        </p>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[hsl(var(--accent))] text-[#0b0b0f] font-medium text-sm no-underline"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
