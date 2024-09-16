import React from "react";

export const QuoteBox = ({
  quote,
  author,
  category,
}: {
  quote: string;
  author: string;
  category: string;
}) => {
  return (
    <div className="w-2/3 h-[400px] m-auto border-white border flex flex-col gap-4 justify-center">
      <h2 className="text-3xl">
        {quote ? quote : "Push buttont to get quote"}
      </h2>
      <p className="text-2xl">{author ? author : " "}</p>
      <p>{category ? `Category : ${category}` : " "}</p>
    </div>
  );
};
