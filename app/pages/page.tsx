// import NewsComponent from "@/components/NewsComponent";
import SideComponent from "@/components/SIdebarComponent";
import Technology from "@/components/Technology";
import React from "react";

function Techno() {
  return (
    <div className="flex flex-row">
      {/* <NewsComponent /> */}
      <Technology />
      <SideComponent />
    </div>
  );
}

export default Techno;
