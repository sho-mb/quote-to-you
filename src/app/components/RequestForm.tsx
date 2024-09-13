// "use client";

// import { useFormStatus } from "react-dom";
// import { QuoteButton } from "./QuoteButton";
// import { QuoteCategory } from "./QuoteCategory";
// import { useState } from "react";

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return <QuoteButton status={pending} />;
// }

// export function RequestForm() {
//   const [category, setCategory] = useState<string>();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const submitData = { category };
//   };

//   return (
//     <form >
//       <QuoteCategory />
//       <SubmitButton />
//     </form>
//   );
// }
