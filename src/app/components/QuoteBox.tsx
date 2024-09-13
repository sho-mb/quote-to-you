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
    <div className="w-2/3 h-[400px] m-auto border-white border flex flex-col gap-4 p-28">
      <h2 className="text-3xl">{quote ? quote : " "}</h2>
      <p className="text-2xl">{author ? author : " "}</p>
      <p>Category : {category ? category : " "}</p>
    </div>
  );
};
