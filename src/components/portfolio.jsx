import React from "react";

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
            image="https://i.postimg.cc/2877Ft5m/medeo.gif"
            year="2020"
            url="http://medeo-dz.com/"
          />
          <Project
            descreption="Temtem One is a mobile application offering several services, including: the purchase of products and services online (groceries, mobility, phone recharge, clothing, cosmetics, household appliances, flowers, etc.), credit transfer, etc."
            title="Temtem One"
            image="https://i.postimg.cc/Qxtmq3FD/temtemone.gif"
            year="2020"
            url="https://www.temtem.one/"
          />
          <Project
            descreption="Seha is a web application for online medical consultation service."
            title="Seha"
            image="https://i.postimg.cc/sxfcqFKp/seha.gif"
            year="2020"
            url="http://seha.doctor/"
            mobile
          />
          <Project
            descreption="Delivery is a web platform for delivering and managing orders."
            title="Delivery"
            image="https://i.postimg.cc/TPrJP24V/delivery.gif"
            year="2019"
          />
          <Project
            descreption="A mobile application for latest updates of movies and theaters."
            title="I- Watch"
            image="https://i.postimg.cc/85dGwvn7/ezgif-com-gif-maker.gif"
            year="2018"
            source="https://github.com/nanaker/iWatch2"
            mobile
          />
        </div>
      </section>
    );
  }
}

export default Portfolio;
