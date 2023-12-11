import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="h-full bg-black">
        <Navbar/>
      <main className="pt-40 pb-20 bg-gray-200"> {children} </main>
      <Footer/>
    </div>
  );
};

export default MarketingLayout;
