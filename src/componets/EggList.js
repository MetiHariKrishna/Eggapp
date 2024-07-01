import Link from "next/link";
import React from "react";

const EggList = () => {
  const eggs = [
    {
      id: 1,
      name: "Egg 1",
    },
    {
      id: 2,
      name: "Egg 2",
    },
  ];
  return (
    <div>
      <h1>Egg List</h1>
      <ul>
        {eggs?.map((egg) => (
          <li key={egg.id}>
            <Link href={`/egg/${egg.id}`}> {egg.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EggList;
