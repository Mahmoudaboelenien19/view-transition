import React from "react";
import { useSearchParams } from "react-router-dom";

const AboutChild = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const setParam = (param, value) => {
    setSearchParams((params) => {
      params.set(param, value);

      return params;
    });
  };
  return (
    <button
      onClick={() => {
        setParam("page", 1);
      }}
    >
      add Param
    </button>
  );
};

export default AboutChild;
