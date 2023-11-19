import React from "react";
import { useLoaderData } from "react-router-dom";

const COntact = () => {
  const data = useLoaderData();

  return (
    <div>
      {" "}
      <div>
        {data?.map(({ name }) => {
          return <div key={name}>{name}</div>;
        })}
      </div>
    </div>
  );
};

export default COntact;
