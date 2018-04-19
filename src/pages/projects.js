import React from 'react';
import Link from 'gatsby-link';

const ProjectsPage = () => (
  <div className="hero-body">
    <div className="container">
      <div className="columns is-vcentered is-centered">
        <div className="column is-two-thirds ">
          <div id="resume-contact" className="has-text-centered">
            <p className="links">
              <Link to="/" className="button is-large is-bg">
                <i className="fas fa-arrow-left" />Home
              </Link>
              <a className="button is-large is-bg" href="https://github.com/moscamj/">
                <i className="fab fa-github" />Github
              </a>
            </p>
            <p className="title is-size-2">Projects</p>
          </div>
          <div className="content">
            <h3>
              <a href="https://github.com/moscamj/moscamj.github.io/tree/develop">Homepage</a>
            </h3>
            <p>
              This website! Built using <a href="https://www.gatsbyjs.org/">Gatsby</a>, a static PWA
              generator, and <a href="https://bulma.io/">Bulma</a>, a fantastic CSS framework.
            </p>
            <h3>
              <a href="https://github.com/moscamj/cryptodashboard">CryptoDashboard</a> -{' '}
              <a href="https://small-celery.surge.sh/">Live Demo</a>
            </h3>
            <p>
              A dashboard to monitor cryptocurrency prices, displayed in grid format. Soon to come: portfolios
              to track sets of cryptocurrencies, and track the amount you've invested in each. Built in{' '}
              <a href="https://reactjs.org/">React</a> and <a href="https://bulma.io/">Bulma</a>, using the{' '}
              <a href="https://coinmarketcap.com/api/">CoinMarketCap API</a> for prices and coin information.
            </p>
            <h3>
              <a href="https://codepen.io/moscamj/pen/YaqGBJ">Random Quote Generator</a>
            </h3>
            <p>
              A <a href="https://www.freecodecamp.org/">FreeCodeCamp</a> project which pulls random quotes
              from the <a href="https://forismatic.com/en/api/">Forismatic API</a>, and lets you generate new
              quotes or Tweet the current one.
            </p>
            <h3>
              <a href="https://codepen.io/moscamj/pen/XEdZpV">GDP Data Visualization</a>
            </h3>
            <p>
              A <a href="https://www.freecodecamp.org/">FreeCodeCamp</a> project which pulls sample US GDP
              data from a repository and displays it as a bar graph using{' '}
              <a href="http://www.chartjs.org/">Chart.js</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsPage;
