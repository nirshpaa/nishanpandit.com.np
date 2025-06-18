import React, { useEffect, useState } from "react";

const IPCountryClass: React.FC = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map for testing specific countries (for development purposes)
  // Remove or modify this for production
  const testCountryMap = {
    // Map specific IPs to countries for testing
    "123.45.67.89": "nepal",
    // Add more test mappings as needed
  };

  useEffect(() => {
    // Function to fetch the IP and then the country
    const fetchIPAndCountry = async () => {
      try {
        // First fetch the IP address
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();

        // For testing: Check if this IP should map to a test country
        if (testCountryMap[ipData.ip]) {
          const testCountry = testCountryMap[ipData.ip];
          setCountry(testCountry);
          document.documentElement.classList.add(testCountry);
          setLoading(false);
          return;
        }

        // Then fetch the country information using the IP
        const geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const geoData = await geoResponse.json();

        if (geoData.error) {
          throw new Error("Failed to get country information");
        }

        // Get country name and convert to lowercase for CSS class
        const countryName = geoData.country_name
          .toLowerCase()
          .replace(/\s+/g, "-");

        // Set the country in state
        setCountry(countryName);

        // Add the country class to the HTML tag
        document.documentElement.classList.add(countryName);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching IP or country:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchIPAndCountry();

    // Cleanup function to remove the class when component unmounts
    return () => {
      if (country) {
        document.documentElement.classList.remove(country);
      }
    };
  }, []); // Removed country dependency to prevent infinite loop

  return(<></>);
};

export default IPCountryClass;
