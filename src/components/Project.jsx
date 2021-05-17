import React from "react";

const Project = ({ title, descreption, image, url, year, animation }) => {
  return (
    <div className="row">
      <div
        class="row align-items-center h-100 text-center text-lg-left"
        bis_skin_checked="1"
      >
        <div
          class={`col-lg-6 p-3 ${animation ? "work-box" : ""}`}
          bis_skin_checked="1"
        >
          <div className="work-img">
            <img className="projectImage work-img" src={image} alt="project" />
          </div>
        </div>
        <div class="col-lg-5 mx-auto py-3" bis_skin_checked="1">
          <h3 class="h3  ">
            {title}
            <span class="badge badge-primary badge-sm ml-3">{year}</span>
          </h3>
          <p class="showcase__description mb-4 color-gray">{descreption}</p>

          <a href={url} class="btn btn-outline-primary float-right">
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
