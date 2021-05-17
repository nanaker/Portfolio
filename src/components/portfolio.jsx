import React from "react";

//import stock
import medeo from "../img/medeo.gif";
import temtemone from "../img/temtemone.gif";
import Project from "./Project";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <Project
            descreption="Medeo is a platform designed for sharing scientific content
        with health professionals."
            title="Medeo"
            image={medeo}
            year="2020"
            url="http://medeo-dz.com/"
          />
          <Project
            descreption="Temtem One is a mobile application offering several services, including: the purchase of products and services online (groceries, mobility, phone recharge, clothing, cosmetics, household appliances, flowers, etc.), credit transfer, etc."
            title="Temtem One"
            image={temtemone}
            year="2020"
            url="https://www.temtem.one/"
          />
        </div>
      </section>
    );
  }
}

export default Portfolio;
