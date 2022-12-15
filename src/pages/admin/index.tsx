import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import type { DeltaType } from "@tremor/react";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const Index: NextPage = ({ data }) => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-3xl">Admin</h1>
      <p className="text-xl">This is the admin page</p>
      {useSession().data?.user && (
        <Card>
          <Table marginTop="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell textAlignment="text-right">
                  Issue
                </TableHeaderCell>
                <TableHeaderCell textAlignment="text-right">
                  Details
                </TableHeaderCell>
                <TableHeaderCell textAlignment="text-right">
                  Status
                </TableHeaderCell>
                <TableHeaderCell textAlignment="text-right">
                  Created At
                </TableHeaderCell>
                <TableHeaderCell textAlignment="text-right">
                  Updated At
                </TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data
                .filter((data) => isSalesPersonSelected(data))
                .map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell textAlignment="text-right">
                      {item.issue}
                    </TableCell>
                    <TableCell textAlignment="text-right">
                      {item.details}
                    </TableCell>
                    <TableCell textAlignment="text-right">
                      {item.status}
                    </TableCell>
                    <TableCell textAlignment="text-right">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell textAlignment="text-right">
                      {item.updatedAt}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      )}

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

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/getSubmissions");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
