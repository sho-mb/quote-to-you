"use client";
import { useState } from "react";
import { QuoteBox } from "./components/QuoteBox";

export default function Home() {
  const [category, setCategory] = useState<string>("age");
  const [quote, setQuote] = useState<Quote>({
    quote: "",
    author: "",
    category: "",
  });

  const handleClick = async () => {
    const res = await fetch(`/api/ninja?category=${category}`);
    const data = await res.json();
    setQuote(data.data[0]);
  };

  return (
    <main className="text-center">
      <div className="mt-[100px] text-3xl mb-10">Get quotes for you day!</div>
      <QuoteBox
        quote={quote.quote}
        author={quote.author}
        category={quote.category}
      />

      <div className="flex flex-col gap-3 w-fit justify-center items-center m-auto mt-10">
        <select
          className="text-black"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          onClick={handleClick}
          className="w-[360px] h-20 rounded-full bg-blue-500 text-2xl font-bold hover:bg-blue-800 transition"
        >
          QuoteButton
        </button>
      </div>
    </main>
  );
}

type Quote = {
  quote: string;
  author: string;
  category: string;
};

const categories = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];
