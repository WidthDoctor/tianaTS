import React from 'react';

import SectionTitle from "../General/SectionTitle.tsx";
import About from "../General/About.tsx";
import Slider from "../General/Slider.tsx";
import Flawless from "../General/Flawless.tsx";
interface GeneralProps {
  onSelectPage: (pageName: string) => void;
}
const General: React.FC<GeneralProps> = ({ onSelectPage }) => {
  return (
    <>
      <SectionTitle onSelectPage={onSelectPage}/>
      <About />
      <Slider />
      <Flawless />
    </>
  );
}

export default General;
