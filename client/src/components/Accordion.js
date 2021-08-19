import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import "../styles/Accordion.scss";

const Accordion = ({ heading, filters }) => {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="accordion">
      <div className="accordion__heading" onClick={handleClick}>
        <span className="sign">{showContent ? "-" : "+"}</span>
        <span>{heading}</span>
      </div>
      {<AccordionContent showContent={showContent} filters={filters} />}
    </div>
  );
};

export default Accordion;
