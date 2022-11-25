import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/sections/Header";
import Myself from "../components/sections/Myself";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import LanguageProvider from "../context/LanguageContext";

export default function Home() {
  return (
    <div>
      <LanguageProvider>
        <Head>
          <title>{`Portfolio - Franco D'Angelo - Full-Stack Developer`}</title>
          <meta name="description" content={`I'm a Full Stack Developer looking for new challenges & experiences to keep learning and improving`} />
          <link rel="icon" href="/logo.ico" />
        </Head>
        <Navbar />
        <Header />
        <Myself />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  )
}