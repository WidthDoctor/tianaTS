import React from 'react';
import Select from "./Select.tsx";
import "./Procedure.css";
const Procedure: React.FC = () => {
  return (
    <>
    <section className="procedure">
        <h3>Индивидуальный пошив свадебного платья</h3>
        <img src="/src/assets/procedureImages/bant.jpg" alt="bant" />
        <Select />
    </section>
    </>
  )
};

export default Procedure;