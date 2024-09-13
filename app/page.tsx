// import { Newsget } from "@/components/newsget";

import NewsComponent from "@/components/NewsComponent";
import Pagination from "@/components/Pagination";
import SideComponent from "@/components/SIdebarComponent";

// import Newsarticle from "@/components/Newsarticle";

export default function Home() {
  return (
    <>
      {/* <Newsarticle /> */}
      {/* <NewsComponent />
      <SideComponent /> */}
      <div className="flex flex-row">
        <NewsComponent />
        <Pagination />
        <SideComponent />
      </div>
    </>
  );
}
