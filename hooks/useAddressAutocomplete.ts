"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export interface AddressSuggestion {
  label: string;
  score: number;
  id: string;
  type: string;
  name: string;
  postcode: string;
  citycode: string;
  city: string;
  context: string;
  importance: number;
  street: string;
}

type AddressApiFeature = {
  properties: Omit<AddressSuggestion, "id"> & { id?: string };
};

type AddressApiResponse = {
  features: AddressApiFeature[];
};

export function useAddressAutocomplete(initialAddress: string = "") {
  const [address, setAddress] = useState(initialAddress);
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [citycode, setCitycode] = useState("");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5`;
      const response = await fetch(url);
      const data: AddressApiResponse = await response.json();
      setSuggestions(
        data.features.map((f) => ({
          ...f.properties,
          id: f.properties.id || Math.random().toString(),
        }))
      );
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
      setSuggestions([]);
    }
  }, []);

  const handleAddressChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAddress(value);
      setCity("");

      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        fetchSuggestions(value);
      }, 300);
    },
    [fetchSuggestions]
  );

  const handleSelectAddress = useCallback((suggestion: AddressSuggestion) => {
    setAddress(suggestion.label);
    setCity(suggestion.city || "");
    setPostcode(suggestion.postcode || "");
    setCitycode(suggestion.citycode || "");
    setSuggestions([]);
    setShowSuggestions(false);
  }, []);

  return {
    address,
    setAddress,
    city,
    postcode,
    citycode,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    handleAddressChange,
    handleSelectAddress,
  };
}
