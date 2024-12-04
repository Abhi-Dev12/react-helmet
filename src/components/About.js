import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Learn more about our team and mission on this page." />
      </Helmet>
      <h1>About Us</h1>
      <p>This page provides information about our company and mission.</p>
    </div>
  );
};

export default About;
