
import "./GeneralPage.css";

import MainMenu from "../MainMenu/MainMenu.tsx";
import SectionTitle from "../General/SectionTitle.tsx";
import About from "../General/About.tsx";
import Slider from "../General/Slider.tsx";
import Flawless from "../General/Flawless.tsx";
import Footer from "../Footer/Footer.tsx";

function General() {
  return (
    <>
      <MainMenu />
      <SectionTitle />
      <About />
      <Slider />
      <Flawless />
      <Footer />
    </>
  );
}

export default General;
