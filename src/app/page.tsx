"use client";
import { CardLayout } from "@/components/CardLayout/CardLayout";
import { loadUnescoData, UnescoSite } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<UnescoSite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const unescoData = await loadUnescoData();
        setData(unescoData);
      } catch (err) {
        setError("Failed to load UNESCO data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">UNESCO World Heritage Sites</h1>
      <CardLayout data={data} />
    </div>
  );
}
