// Articles.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// Assuming these icon components are defined somewhere in your project
import {
  HomeIcon,
  NewspaperIcon,
  LaptopIcon,
  TrophyIcon,
  FilmIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsarticles() {
  // Sample article data (replace with your actual data fetching logic)
  const articles = [
    {
      id: 1,
      title: "Innovative Tech Startup Secures Funding",
      imageUrl:
        "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",
      summary:
        "A promising new tech company has secured a significant investment, paving the way for rapid growth and innovation in the industry.",
    },
    {
      id: 2,
      title: "Sports Team Wins Championship Title",
      imageUrl:
        "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",
      summary:
        "After a hard-fought season, the local sports team has emerged victorious, bringing home the coveted championship trophy.",
    },
    {
      id: 3,
      title: "Sports Team Wins Championship Title",
      imageUrl:
        "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",
      summary:
        "After a hard-fought season, the local sports team has emerged victorious, bringing home the coveted championship trophy.",
    },
    {
      id: 4,
      title: "Sports Team Wins Championship Title",
      imageUrl:
        "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",
      summary:
        "After a hard-fought season, the local sports team has emerged victorious, bringing home the coveted championship trophy.",
    },
    {
      id: 5,
      title: "Sports Team Wins Championship Title",
      imageUrl:
        "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",
      summary:
        "After a hard-fought season, the local sports team has emerged victorious, bringing home the coveted championship trophy.",
    },
    {
      id: 6,
      title: "Sports Team Wins Championship Title",
      imageUrl:
        "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",
      summary:
        "After a hard-fought season, the local sports team has emerged victorious, bringing home the coveted championship trophy.",
    },
    // ... more articles (add your actual article data here)
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* ... (hero section content - You'll need to add this part based on your design) ... */}

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {articles.map((article) => (
                <Card key={article.id} className="rounded-lg overflow-hidden">
                  <img
                    src={article.imageUrl}
                    width={400}
                    height={225}
                    alt={article.title}
                    className="w-full h-[200px] md:h-[150px] lg:h-[180px] object-cover"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {article.summary}
                    </p>
                    {/* Add a Link component to navigate to the full article */}
                    <Link href={`/article/${article.id}`}>Read More</Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <aside className="bg-muted border-t py-8 px-6 md:px-8 lg:px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Categories</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                <HomeIcon className="w-4 h-4" />
                Academics
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                <NewspaperIcon className="w-4 h-4" />
                Research
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                <LaptopIcon className="w-4 h-4" />
                Admissions
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                <TrophyIcon className="w-4 h-4" />
                Campus Life
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                <FilmIcon className="w-4 h-4" />
                Alumni
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Popular Articles</h3>
            <div className="space-y-4">
              {/* ... (popular article previews) ... */}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
}
