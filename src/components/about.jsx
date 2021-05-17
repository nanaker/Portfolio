import React from "react";
import Tagcloud from "./Tagcloud";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content: "Hi, I'm Nawal! I am a Full-Stack developer at casbahTech.",
        },
        {
          id: "second-p-about",
          content:
            "I'm specializes in JavaScript Technologies across the whole stack (Node.js, Express, React, Redux) with +3 years experience.",
        },
        {
          id: "third-p-about",
          content:
            "I enjoy designing & engineering efficient and responsive web applications. ",
        },
        {
          id: "fourth-p-about",
          content:
            "I like to develop expertise in a number of areas over the course of my life and career. I'm always Looking for new challenges and open for exciting career opportunities.",
        },
        {
          id: "fifth-p-about",
          content:
            "You can read more about my biography, experience, skills, education and much more in the Docx attached bellow:",
        },
        {
          id: "sixth-p-about",
          content: <a href="./cv.docx">Download here</a>,
        },
      ],
    };
  }

  componentDidMount() {
    var texts = [
      "React",
      "Redux",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Git",
      "NodeJs",
      "ExpressJs",
      "Bootstrap",
      "Antd",
      "Saga",
      "Jira",
      "ES6",
      "REST",
      "JSON",
      "SASS",
    ];
    var tc = Tagcloud(".contentTag", texts);
    console.log(tc);
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div class="contentTag" />
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" id={content.id} key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
