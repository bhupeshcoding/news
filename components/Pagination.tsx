"use client";
import { useState, useEffect, FC } from "react";

interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    id: string | null;
    name: string;
  };
}

const Pagination: FC = () => {
  // ... (rest of the code is the same as before, up to the articles.map section)
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [error, setError] = useState<string | null>(null);

  const handleNextPage = () => {
    setCurrentPage((prevPage: number) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage: number) => prevPage - 1);
  };

  useEffect(() => {
    const apiKey =
      "https://gnews.io/api/v4/top-headlines?category=sports&lang=hindi&country=us&max=10&apikey=f72138ee8b6b319fadb92e3287e4f0e5";
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
  }, []);

  return (
    <div className="container">
      <div className="row d-flex flex-row" id="news-container">
        {error ? (
          <p>{error}</p>
        ) : (
          articles.map((article) => (
            <div
              key={article.url}
              className="card-body d-flex flex-column justify-content-center"
              style={{
                margin: "15px",
                width: "90%",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">
                {article.description?.length > 80
                  ? `${article.description.slice(0, 80)}...`
                  : article.description}
              </p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <small className="text-muted">
                  By {article.author || "Unknown"} on{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </small>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
