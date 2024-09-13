"use client";

import { useEffect, useState } from "react";

interface Article {
  title: string;
  description?: string;
  content?: string;
  url: string;
  image?: string;
  publishedAt?: string;
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles.slice(0, 10));
        } else {
          setError("No news articles found.");
        }
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(
          "An error occurred while fetching news. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : articles.length > 0 ? (
        <ul className="list-none p-0">
          {articles.map((article) => (
            <li
              key={article.url}
              className="mb-6 border-b border-gray-300 pb-4"
            >
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover mb-2"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">
                {article.title || "Untitled"}
              </h2>
              <p className="text-gray-700 mb-2">
                {article.description?.length > 150
                  ? `${article.description.slice(0, 150)}...`
                  : article.description || "No description available"}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news articles available at this time.</p>
      )}
    </div>
  );
}
