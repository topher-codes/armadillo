import { useRouter } from "next/router";

const UserPage = (user) => {
  return (
    <div>
      <h1>User Page</h1>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};

export default UserPage;
