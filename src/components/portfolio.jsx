import React from "react";

//import stock
import medeo from "../img/medeo.gif";
import temtemone from "../img/temtemone.gif";
import delivery from "../img/delivery.gif";
import seha from "../img/seha.gif";
import movies from "../img/movies.gif";
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
          <Project
            descreption="Seha is a web application for online medical consultation service."
            title="Seha"
            image={seha}
            year="2020"
            url="http://seha.doctor/"
          />
          <Project
            descreption="Delivery is a web platform for delivering and managing orders."
            title="Delivery"
            image={delivery}
            year="2019"
          />
          <Project
            descreption="A mobile application for latest updates of movies and theaters."
            title="I- Watch"
            image={movies}
            year="2018"
            source="https://github.com/nanaker/iWatch2"
          />
        </div>
      </section>
    );
  }
}

export default Portfolio;
