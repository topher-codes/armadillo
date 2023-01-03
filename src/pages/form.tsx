import { type NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    await fetch("http://localhost:3000/api/postSubmission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        issue: e.target.issue.value,
        details: e.target.details.value,
      }),
    });
  };

  return (
    <div className=" align-center container mx-auto flex min-w-full flex-col items-center justify-center border">
      <h1 className="text-3xl">Welcome to the form!</h1>
      <p className="text-xl">This is the form page</p>
      {!submitted ? (
        <form
          className="align-center flex w-60 flex-col justify-center text-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            className="border"
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            className="border"
            type="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="issue">Issue</label>
          <input
            className="border"
            type="text"
            name="issue"
            id="issue"
            required
          />
          <label htmlFor="details">Detailed Description</label>
          <textarea className="border" name="details" id="details" required />
          <button
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h1>Thank you for submitting your form!</h1>
        </div>
      )}
      <p>Some stuff</p>
    </div>
  );
};
export default Home;
