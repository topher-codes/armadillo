import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Index: NextPage = ({ data }: any) => {
  return (
    <div className="container mx-auto border px-4 ">
      <h1 className="text-2xl">Admin Page</h1>
      <p>Here is the data from the database:</p>
      <br />
      {useSession().data?.user && (
        <ul>
          {data.map((submission: any) => (
            <li key={submission.id} className="mx-auto border py-4">
              <p>
                <strong>Name:</strong> {submission.name}
              </p>
              <p>
                <strong>Email:</strong> {submission.email}
              </p>
              <p>
                <strong>Issue:</strong> {submission.issue}
              </p>
              <p>
                <strong>Detailed Description:</strong> {submission.details}
              </p>
              <p>
                <strong>Date Created:</strong>{" "}
                {new Date(submission.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
      {!useSession().data?.user ? (
        <div>
          <p>You must be signed in to view this page.</p>
          <button
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
      ) : (
        <button
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/getSubmissions");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
