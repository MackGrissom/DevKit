'use client'
import { Button } from "@/components/ui/button";
import { Laptop, Medal, Rocket } from "lucide-react";
import Link from "next/link";
import React from "react";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
import { Montserrat, Poppins } from "next/font/google";
import { FaDiscord } from "react-icons/fa";

import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

import Features from "./_components/features";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});
const textFont = Montserrat({
  subsets: ['latin'],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ]
});

const MarketingPage = () => {
  return (
    <>
    		
    <div className="flex flex-col items-center justify-center space-y-8 h-full mb-20">
      <div className={cn("flex flex-col items-center justify-center", headingFont.className)}>
        <div className="mb-6 flex items-center border shadow-sm p-2 bg-gray-100 text-amber-700 hover:bg-slate-700 hover:text-white rounded-lg uppercase cursor-pointer">
          {/* <Laptop className="h-6 w-6 mr-2" /> */}
          Join The Community &nbsp; <FaDiscord/>
        </div>
        <h1 className="text-4xl md:text-6xl text-center text-neutral-900 font-bold mb-6">
          Visualize Development with DevKit
        </h1>
        <div className="text-3xl md:text-5xl text-white bg-gradient-to-r from-slate-700 to-amber-600 px-6 py-3 rounded-lg w-fit text-center">
        Ideate, Create, Execute.
        </div>
      </div>
      <div className={cn("text-lg md:text-xl text-neutral-600 max-w-md md:max-w-2xl text-center", textFont.className)}>
        From concept, to code, to community; DevKit offers an agile ecosystem that fuels collaborative and efficient software development. <br/>
        
      </div>
      <Button className="text-lg px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition duration-300 ease-in-out rounded-lg">
        <Link href="/sign-up">Try DevKit for Free</Link>
      </Button>
    </div>

    <Features/>
    </>
  );
};

export default MarketingPage;
