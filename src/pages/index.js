import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns is-vcentered is-centered">
        <div className="column is-two-thirds ">
          <p className="title">Hi, I'm Matthew Mosca, developer in RVA</p>
          <p>
            I love building applications using a wide range of technologies. Some of my favorites include
            Java, JavaScript, and React. I also enjoy tinkering with many others, including Go, Python,
            node.js, Vue, and many more.
          </p>
          <p className="links">
            <a className="button is-large is-bg" href="https://github.com/moscamj/">
              <i className="fab fa-github" />Github
            </a>
            <a className="button is-large is-bg" href="https://www.linkedin.com/in/matthewjmosca/">
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <Link to="/resume" className="button is-large is-bg">
              <i className="fas fa-file-alt" />Resume
            </Link>
            <Link to="/projects" className="button is-large is-bg">
              <i className="fas fa-book" /> Projects
            </Link>
            <a className="button is-large is-bg" href="mailto:moscamj@vcu.edu">
              <i className="fas fa-envelope" /> E-mail
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
