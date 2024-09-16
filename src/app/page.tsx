"use client";
import { Suspense, useState } from "react";
import { ZenQuote } from "@/types/Quote";
import { QuoteButton } from "./components/ui/SubmitButton";
import ShareTweet from "./components/ui/ShareTweet";

export default function Home() {
  const [quote, setQuote] = useState<ZenQuote>({
    q: "",
    a: "",
    h: "",
  });

  const handleClick = async () => {
    const res = await fetch(`/api/zen`);
    const data = await res.json();
    setQuote(data.data[0]);
  };

  function createMarkup(c: string) {
    return { __html: c };
  }

  return (
    <main className="text-center">
      <div className="mt-[100px] text-3xl mb-10">Get quotes for your day!</div>
      <Suspense fallback={<p>Loading Quote....</p>}>
        <div>
          {quote.h !== "" && (
            <div dangerouslySetInnerHTML={createMarkup(quote.h)}></div>
          )}
        </div>
      </Suspense>
      <div className="flex flex-col gap-8 w-fit justify-center items-center m-auto mt-10">
        <QuoteButton handleClick={handleClick} buttonTitle="QuoteButton" />
      </div>
      <div className="mt-4">
        Inspirational quotes provided by{" "}
        <a href="https://zenquotes.io/" target="_blank">
          ZenQuotes API
        </a>
      </div>
      <div className="m-auto w-fit mt-4">
        {quote.a && <ShareTweet author={quote.a} quote={quote.q} />}
      </div>
    </main>
  );
}
