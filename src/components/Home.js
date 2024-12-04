import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the home page of our application." />
      </Helmet>
      <h1>Welcome to the Home Page</h1>
      <p>This is the landing page of the application.</p>
    </div>
  );
};

export default Home;
