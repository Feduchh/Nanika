"use client";

import { useState, useEffect } from "react";

const API_URL = "http://localhost:7700";
const API_KEY = "aSampleMasterKey";
const INDEX_NAME = "products";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const resultsPerPage = 5;

  const fetchResults = async (searchQuery) => {
    try {
      const response = await fetch(`${API_URL}/indexes/${INDEX_NAME}/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ q: searchQuery, limit: 50 }),
      });

      const data = await response.json();
      setResults(data.hits || []);
    } catch (error) {
      console.error("Error al buscar:", error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      fetchResults(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const filteredResults = results.slice(0, resultsPerPage);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar productos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-4 border pt-[2px] rounded-base shadow-md ring-1 ring-gray-500 focus:outline-none focus:ring-1 focus:ring-black h-10 my-2 placeholder:text-gray-600 scale-y-[0.9]"
        />
      </div>
      {query && (
        <ul className="absolute z-60 w-full bg-white border rounded-lg shadow-lg overflow-hidden ">
          {filteredResults.map((hit) => (
            <li key={hit.id} className="p-3 border-b last:border-none hover:bg-gray-100 flex items-center gap-3">
              <img src={hit.thumbnail} alt={hit.title} className="w-12 h-12 rounded-md object-cover" />
              <div>
                <h2 className="text-sm">{hit.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
