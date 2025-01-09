
import "./SectionTitle.css";
import React from 'react';

interface SectionTitleProps {
  onSelectPage: (pageName: string) => void;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ onSelectPage }) => {

    return (
        <>
            <section id="section-title">
                <div className="title-wrapper">
                    <h2>Пошив свадебного платья</h2>
                    <span>Все, что нужно знать об этом - технология, организация работы, сроки, стоимость.</span>
                    <button onClick={() => onSelectPage('procedure')}>Читать дальше..</button>
                </div>
            </section>
        </>
    )
}

export default SectionTitle;