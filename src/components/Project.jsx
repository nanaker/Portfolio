import React from "react";

const Project = ({
  title,
  descreption,
  image,
  url,
  year,
  animation,
  source,
}) => {
  const showLinks = () => {
    if (url)
      return (
        <a href={url} class="btn btn-outline-primary float-right">
          Visit site
        </a>
      );
    if (source)
      return (
        <a href={source} class="btn btn-outline-primary float-right">
          Source code
        </a>
      );
    else
      return (
        <button
          style={{ cursor: "not-allowed" }}
          disabled
          class="btn btn-outline-primary float-right"
        >
          Web site unavailable
        </button>
      );
  };
  return (
    <div className="row overflow-hidden">
      <div
        class="row align-items-center h-100 text-center text-lg-left p-4 justify-content-md-center"
        bis_skin_checked="1"
      >
        <div
          class={`fixedWidth p-3 ${animation ? "work-box" : ""}`}
          bis_skin_checked="1"
        >
          <div className="work-img">
            <img className="projectImage work-img" src={image} alt="project" />
          </div>
        </div>
        <div class="col-lg-5 mx-3 py-3" bis_skin_checked="1">
          <h3 class="h3  ">
            {title}
            <span class="badge badge-primary badge-sm ml-3">{year}</span>
          </h3>
          <p class="showcase__description mb-4 color-gray">{descreption}</p>
          {showLinks()}
        </div>
      </div>
    </div>
  );
};

export default Project;
