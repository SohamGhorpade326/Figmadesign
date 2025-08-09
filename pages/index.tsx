import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Services2 from '../components/Services2';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erica Jones - Creative Designer</title>
        <meta name="description" content="Erica Jones - A Young Creative Designer Based in San Diego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --- CORRECTED SECTION ORDER --- */}

      {/* Section 1: Hero (Dark BG) */}
      <div className="bg-[#111111] text-white">
        <Navbar />
        <Hero />
        <ClientLogos />
      </div>

      {/* Section 2 & 3: About & Portfolio (Light BG) */}
      <div className="bg-[#F5F2EC]">
        <About />
        <Portfolio />
      </div>

      {/* Section 4: Testimonials (Dark BG) */}
      <div className="bg-[#111111] text-white">
        <Testimonials />
      </div>
      
      {/* Section 5: Services (Light BG) */}
      <div className="bg-[#F5F2EC]">
        <Services2 />
      </div>

      {/* Section 6: Contact (Dark BG) */}
      <div className="bg-[#111111] text-white">
        <Contact />
      </div>
    </>
  );
};

export default Home;

