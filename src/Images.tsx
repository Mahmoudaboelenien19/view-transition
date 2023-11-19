import React from "react";
import { Link } from "react-router-dom";
import { imgs } from "./images.js";

const Images = () => {
  return (
    <div className="images">
      {imgs.map(({ img, id }) => {
        return (
          <div key={id}>
            <Link to={`/images/${id}`} unstable_viewTransition>
              <img src={img} style={{ viewTransitionName: `img-${id}` }} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Images;
/* *use latest version of react router dom *add this to link *style=
            {{ viewTransitionName: `img-${id}` }}
            -this name must be unique *so we use the id use the same
            viewTransitionName in the new route note - images in new route must
            be ready to use _ يعني مش لسه هتعمل fetch جديد للداتا ممكن تستخدم
            ريدكس */
