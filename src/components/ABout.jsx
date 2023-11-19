import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import AboutChild from "./AboutChild";
import AboutFooter from "./AboutFooter";

const ABout = () => {
  const navigation = useNavigation();
  if (navigation.state == "loading") {
    return <>loadingg</>;
  }
  // const data = useLoaderData();

  console.log("about re-renders");
  return (
    <div>
      {/* {data?.map(({ id }) => {
        return <div key={id}>{id}</div>;
      })} */}

      <br />

      <hr />
      <AboutChild />
      <AboutFooter />
    </div>
  );
};

export default ABout;
// export const getUsers = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users");
//   return data.json();
// };
