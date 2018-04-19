import React from 'react';
import Link from 'gatsby-link';

const ResumePage = () => (
  <div className="hero-body">
    <div className="container">
      <div className="columns is-vcentered is-centered">
        <div className="column is-two-thirds ">
          <div id="resume-contact" className="has-text-centered">
            <p className="links">
              <Link to="/" className="button is-large is-bg">
                <i className="fas fa-arrow-left" />Home
              </Link>
              <a
                href="https://github.com/moscamj/moscamj.github.io/raw/master/static/Resume_Matthew_Mosca.pdf"
                className="button is-large is-bg"
              >
                <i className="fas fa-file-pdf" />PDF
              </a>
              <a
                href="https://github.com/moscamj/moscamj.github.io/raw/master/static/Resume_Matthew_Mosca.docx"
                className="button is-large is-bg"
              >
                <i className="fas fa-file-word" />Word
              </a>
            </p>
            <p className="title is-size-2">Matthew Mosca</p>
          </div>
          <div className="content">
            <strong>
              <h3>Skills</h3>
            </strong>
            <ul>
              <li>
                <span className="has-text-weight-semibold">Languages:</span> C++, Java, Javascript, CSS/SASS
              </li>
              <li>
                <span className="has-text-weight-semibold">Databases:</span> MySQL, MongoDB
              </li>
              <li>
                <span className="has-text-weight-semibold">Libraries & Frameworks:</span> jQuery, Node.js,
                Bootstrap, HippoCMS
              </li>
              <li>
                <span className="has-text-weight-semibold">Operating Systems & Software:</span> Windows, OS X,
                Linux, Git, Microsoft Office
              </li>
            </ul>
            <h3>Education</h3>
            <p>
              <span className="has-text-weight-semibold">Bachelor of Science in Computer Science</span>, Dec
              2016
              <br />Virginia Commonwealth University (VCU), Richmond, VA
            </p>
            <h3>Experience</h3>
            <ul>
              <li>
                <span className="has-text-weight-semibold">Web Developer, ReplaceMyCushions LLC</span> -
                Midlothian, VA: 2013 - present
              </li>
              <li>
                <span className="has-text-weight-semibold">Long Island Internet Headquarters</span> - Long
                Island, NY: 2018 - present
              </li>
              <li>
                <span className="has-text-weight-semibold">Web Developer, Authentic</span> - Richmond, VA:
                2016-2017
              </li>
              <li>
                <span className="has-text-weight-semibold">Spring Capstone with Capital One:</span> 2016
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumePage;
