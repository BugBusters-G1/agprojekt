import { useState, useEffect } from "react";
import { Category } from "../types/Category";

const CATEGORY_ENDPOINT = "https://ordbanken-api.vercel.app/api/categories";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CATEGORY_ENDPOINT)
      .then((res) =>
        res.ok ? res.json() : Promise.reject("Failed to fetch categories")
      )
      .then(setCategories)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { categories, error, loading };
}
