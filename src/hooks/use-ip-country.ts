import { useEffect, useState } from "react";

const testCountryMap: Record<string, string> = {
  "123.45.67.89": "nepal",
};

export const useIPCountryClass = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let currentCountry = "";

    const fetchIPAndCountry = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();

        if (testCountryMap[ipData.ip]) {
          currentCountry = testCountryMap[ipData.ip];
        } else {
          const geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
          const geoData = await geoResponse.json();
          if (geoData.error) throw new Error("Failed to get country information");

          currentCountry = geoData.country_name.toLowerCase().replace(/\s+/g, "-");
        }

        document.documentElement.classList.add(currentCountry);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchIPAndCountry();

    return () => {
      if (currentCountry) {
        document.documentElement.classList.remove(currentCountry);
      }
    };
  }, []);

  return { loading, error };
};