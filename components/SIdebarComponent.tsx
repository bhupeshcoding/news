"use client";
import { useState, useEffect } from "react";

interface Article {
  title: string;
  description: string | null;
  url: string;
  image: string | null;
}

const SideComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = () => {
      const apiKey = "f72138ee8b6b319fadb92e3287e4f0e5";
      const apiUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.articles) {
            setArticles(data.articles);
          } else {
            setError("No news articles found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(
            "An error occurred while fetching news. Please try again later."
          );
        });
    };

    // Initial fetch
    fetchNews();

    // Set up interval to fetch every 5 minutes
    const intervalId = setInterval(fetchNews, 5 * 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="sidebar" style={{ width: "30%", padding: "10px" }}>
      {error ? (
        <p>{error}</p>
      ) : (
        articles.map((article) => (
          <div
            key={article.url}
            className="card mb-3"
            style={{ maxWidth: "300px" }}
          >
            {article.image && (
              <img
                src={article.image}
                className="card-img-top"
                alt={article.title}
                style={{ height: "150px", objectFit: "cover" }}
              />
            )}
            <div className="card-body">
              <h6 className="card-title">{article.title}</h6>
              <p className="card-text">
                {article.description?.substring(0, 80) ||
                  "No description available"}
                ...
              </p>
              <a
                href={article.url}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SideComponent;
