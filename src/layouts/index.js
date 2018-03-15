import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import bulma from 'bulma';
import styles from '../style.scss';

const TemplateWrapper = ({ children }) => (
  <div className="">
    <Helmet title="Matthew Mosca">
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
    </Helmet>
    <div className="hero is-fullheight">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
