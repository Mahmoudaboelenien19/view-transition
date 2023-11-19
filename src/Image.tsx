import React from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
import { imgs } from "./images.js";

const ImageRoute = () => {
  const { id = 0 } = useParams();

  const img = imgs.find((i) => i.id == id)?.img;
  return (
    <div className="big-img">
      <img src={img || ""} alt="" style={{ viewTransitionName: `img-${id}` }} />
    </div>
  );
};

export default ImageRoute;
