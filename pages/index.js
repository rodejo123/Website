// pages/index.js

import Head from 'next/head';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <Head>
        <title>Your Church Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>Your Church Name</h1>
        <p>Welcome to our community</p>
        <button onClick={scrollToAbout}>See More</button>
      </header>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Provide a brief description of your church and its mission. Include confessions of faith.</p>
      </section>

      {/* Add other sections as needed */}

      <footer className="footer">
        <p>&copy; 2024 Your Church Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
