import { useState } from 'react';

import Header from './header/Header';
import Hamburger from './header/Hamburger';
import Logo from './header/Logo';
import Navbar from './Navbar/Navbar';
import Home from './home/Home';
import MobileNav from './Navbar/MobileNav';
import HomeTitle from './home/HomeTitle';
import About from './about/About';
import AboutText from './about/AboutText';
import AboutSocials from './about/AboutSocials';
import Skills from './skill/Skills';
import Footer from './Footer';
import Contact from './contact/Contact';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import Loader from './Loader';
import { useLoading } from '../hooks/useLoading';

export default function App() {
  const { isLoading } = useLoading();
  const [isOpen, setIsOpen] = useState(false);

  function handleMobileNavOpen() {
    setIsOpen(o => !o);
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isOpen && <MobileNav className={isOpen ? 'open' : ''} />}
          <Header>
            <Logo />
            <Hamburger onMobileNavOpen={handleMobileNavOpen} />
            <Navbar />
          </Header>
          <Home>
            <HomeTitle />
          </Home>
          <About>
            <AboutText />
            <AboutSocials />
          </About>
          <Skills />
          <Contact>
            <ContactForm />
            <ContactInfo />
          </Contact>
          <Footer />
        </>
      )}
    </div>
  );
}
