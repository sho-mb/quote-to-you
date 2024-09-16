"use client";
import React from "react";

export const QuoteCategory = ({
  handleChange,
  categories,
}: {
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
  categories: string[];
}) => {
  return (
    <select className="text-black" onChange={handleChange}>
      {categories.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
