// Home.jsx
import React from 'react';
import Layout from './Layout'; // Import the Layout component
import Hero from './Hero';
import Cardcover from './Cardcover';
import Contact from './Contact';

export default function Home() {
  return (
    <Layout>
      {/* All your page content goes here */}
      <Hero />
      <Cardcover />
      <Contact />
    </Layout>
  );
}
