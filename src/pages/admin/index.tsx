import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { Card } from "@tremor/react";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-3xl">Admin</h1>
      <p className="text-xl">This is the admin page</p>

      {useSession().data?.user && <Card />}
      {!useSession().data?.user ? (
        <button
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      ) : (
        <button
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      )}

      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-xl">User</p>
            <p className="text-xl">Email</p>

            <p className="text-xl">Name</p>
            <p className="text-xl">Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
