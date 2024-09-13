// // // // // components / NewsComponent.tsx;
// "use client";
// import { useState, useEffect } from "react";

// interface Article {
//   title: string;
//   description: string | null;
//   url: string;
//   image: string | null;
// }

// const NewsComponent: React.FC = () => {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const apiKey =
//       "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=a9cb31fcf14d34ed2644514f3a4edb8c";
//     const apiUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.articles) {
//           setArticles(data.articles);
//         } else {
//           setError("No news articles found.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(
//           "An error occurred while fetching news. Please try again later."
//         );
//       });
//   }, []);

//   return (
//     <div className="container">
//       <div className="row d-flex flex-row" id="news-container">
//         {error ? (
//           <p>{error}</p>
//         ) : (
//           articles.map((article) => (
//             <div
//               key={article.url}
//               className="card-body d-flex flex-column justify-content-center"
//               style={{
//                 margin: "15px",
//                 width: "1200px",
//                 padding: "20px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               {article.image && (
//                 <img
//                   src={article.image}
//                   className="card-img-top"
//                   alt={article.title}
//                   style={{
//                     height: "200px",
//                     objectFit: "cover",
//                     width: "80%",
//                     margin: "0 auto",
//                   }}
//                 />
//               )}
//               <div className="card-body" style={{ padding: "15px" }}>
//                 <h5 className="card-title">{article.title}</h5>
//                 <p className="card-text">
//                   {article.description || "No description available"}
//                 </p>
//                 <a
//                   href={article.url}
//                   className="btn btn-primary"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Read more
//                 </a>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsComponent;

// // // // components / NewsComponent.tsx;
"use client";
import { useState, useEffect } from "react";

interface Article {
  title: string;
  description: string | null;
  url: string;
  image: string | null;
}

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey =
      "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=f72138ee8b6b319fadb92e3287e4f0e5";
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
              {article.image && (
                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "90%",
                    margin: "0 auto",
                  }}
                />
              )}
              <div className="card-body" style={{ padding: "15px" }}>
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description || "No description available"}
                </p>
                <a
                  href={article.url}
                  className="btn btn-primary"
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
    </div>
  );
};

export default NewsComponent;
