import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { doFilter } from "../actions";
import "../styles/AccordionContent.scss";

const AccordionContent = ({ filters, showContent }) => {
  const dispatch = useDispatch();
  const [height, setHeight] = useState("0px");
  const content = useRef(null);

  useEffect(() => {
    setHeight(showContent ? `${content.current.scrollHeight}px` : "0px");
  }, [showContent]);

  const renderFilters = filters.map((filter) => {
    return (
      <p
        className="accordion-content"
        onClick={() => dispatch(doFilter(filter))}
      >
        {filter}
      </p>
    );
  });

  return (
    <div
      ref={content}
      style={{ maxHeight: `${height}` }}
      className="accordion-content-wrapper"
    >
      {renderFilters}
    </div>
  );
};

export default AccordionContent;
