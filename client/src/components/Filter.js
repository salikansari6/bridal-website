import React from "react";
import "../styles/Filter.scss";
import Accordion from "./Accordion";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../utils";
import { clearFilters } from "../actions";
import ColorAccordion from "./ColorAccordion";

const colorFilters = ["rose gold", "red", "blue", "violet", "green"];
const fabricFilters = [
  "Orgazana",
  "Satin",
  "Silk",
  "Velvet",
  "Banarasi Silk",
  "Cotton",
  "Lycra",
];
const sizeFilters = [
  "US 2",
  "US 4",
  "US 4",
  "US 6",
  "US 8",
  "US 10",
  "US 12",
  "US 14",
];
const priceFilters = [5000, 25000, 45000, 65000, 85000, 105000];
const styleFilters = [
  "Heavy Blouse",
  "Fish Cut",
  "Traditional",
  "Designer",
  "Asymmetric",
  "Jacket Style",
  "Printed",
];
const workFilters = [
  "Cut beads",
  "Abstract Print",
  "Handwork",
  "Geometric Print",
  "Floral Print",
  "Lace",
];

const Filter = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.filteredItems);
  return (
    <div className="filter">
      <div className="u--sticky">
        <p className="filter__heading">Filter by</p>
        <ColorAccordion></ColorAccordion>
        <Accordion heading="Color" filters={colorFilters} />
        <Accordion heading="Style" filters={styleFilters} />
        <Accordion heading="Size" filters={sizeFilters} />
        <Accordion heading="Fabric" filters={fabricFilters} />
        <Accordion heading="Price" filters={priceFilters} />
        <Accordion heading="Work" filters={workFilters} />

        {filteredItems &&
          (filteredItems.length < productList.length ? (
            <button onClick={() => dispatch(clearFilters())}>
              Clear Filters
            </button>
          ) : (
            ""
          ))}
      </div>
    </div>
  );
};

export default Filter;
