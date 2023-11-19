import React, { useEffect, useState } from "react";
import "./App.css";
import { router } from "./components/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  console.log("app rerenders");
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
