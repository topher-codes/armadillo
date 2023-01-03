import Link from "next/link";

const Nav = () => {
  return (
    <nav className="align-center container mx-auto flex h-14 flex-row justify-center border px-4">
      <span className="mx-auto">
        <Link href="/">Home</Link>
      </span>
      <span className="mx-auto">
        <Link href="/form">Form</Link>
      </span>
      <span className="mx-auto">
        <Link href="/admin">Admin</Link>
      </span>
    </nav>
  );
};

export default Nav;
