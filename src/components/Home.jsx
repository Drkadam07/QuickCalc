// Home.jsx
import React from 'react';
import Layout from './Layout/Layout'; 
import Hero from './Hero';
import Cardcover from './Cards/Cardcover';
// import Contact from './Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Cardcover />
      {/* <Contact /> */}
    </Layout>
  );
}
