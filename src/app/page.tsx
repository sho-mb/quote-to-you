"use client";
import { Suspense, useState } from "react";
import { QuoteBox } from "./components/ui/QuoteBox";
import { categories } from "@/const/categories";
import { Quote } from "@/types/Quote";
import { QuoteButton } from "./components/ui/SubmitButton";
import { QuoteCategory } from "./components/ui/SelectionCategory";

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <main className="text-center">
      <div className="mt-[100px] text-3xl mb-10">Get quotes for you day!</div>
      <Suspense fallback={<p>Loading Quote....</p>}>
        <QuoteBox
          quote={quote.quote}
          author={quote.author}
          category={quote.category}
        />
      </Suspense>

      <div className="flex flex-col gap-8 w-fit justify-center items-center m-auto mt-10">
        <QuoteCategory handleChange={handleChange} categories={categories} />
        <QuoteButton handleClick={handleClick} buttonTitle="QuoteButton" />
      </div>
    </main>
  );
}
