"use client";
import React from "react";

export const QuoteButton = ({
  handleClick,
  buttonTitle,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonTitle: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className="w-[360px] h-20 rounded-full bg-blue-500 text-2xl font-bold hover:bg-blue-800 transition"
    >
      {buttonTitle}
    </button>
  );
};
