// import { ZenQuote } from "@/types/Quote";
import React, { useEffect } from "react";
import { IconParkSolidBigX } from "./IconParkSolidBigX";

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
      };
    };
  }
}

export default function ShareTweet({
  author,
  quote,
}: {
  author: string;
  quote: string;
}) {
  return (
    <div className="border-white border-0 rounded-full hover:bg-gray-700">
      <a
        href={`https://twitter.com/share?text=${encodeURIComponent(
          `${quote} - ${author}\n`
        )}&hashtags=quote,for,today`}
        target="_blank"
        className="font-bold flex items-center px-4 gap-2"
      >
        <IconParkSolidBigX />
        POST
      </a>
    </div>
  );
}
