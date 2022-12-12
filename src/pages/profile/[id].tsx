import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

const UserProfile: React.FC = () => {
  const { data: sessionData } = useSession();
  const userName = sessionData?.user?.name;
  const userImage = sessionData?.user?.image;
  const userEmail = sessionData?.user?.email;

  return (
    <>
      <h1>Profile</h1>
      <p>
        Image: <Image src={userImage} alt="Image" width={300} height={300} />
      </p>
      <ProfileData label="Name" data={userName} />
      <ProfileData label="Email" data={userEmail} />
    </>
  );
};

const ProfileData: React.FC = (props) => {
  const [edit, setEdit] = React.useState(false);
  const [data, setData] = React.useState(props.data);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };
  return (
    <>
      {!edit ? (
        <p>
          {props.label}: {data} <button onClick={handleEdit}>Edit</button>
        </p>
      ) : (
        <p>
          {props.label}:{" "}
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />{" "}
          <button onClick={handleSave}>Save</button>
        </p>
      )}
    </>
  );
};
