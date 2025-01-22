import React, { useState } from "react";
import "./hero.css";

const Hero = () => {
  // State to hold the values for search fields
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [propertyType, setPropertyType] = useState("");

  // Function to handle form submission (for search)
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    console.log("Searching for:", { city, street, propertyType });
    // Here you can perform an API call or filter your data
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          {/* The form now has onSubmit attached */}
          <form className="flex" onSubmit={handleSearch}>
            <div className="box">
              <span>City</span>
              <input
                type="text"
                placeholder="Location"
                value={city}
                onChange={(e) => setCity(e.target.value)} // Update city value
              />
            </div>
            <div className="box">
              <span>Street</span>
              <input
                type="text"
                placeholder="Address"
                value={street}
                onChange={(e) => setStreet(e.target.value)} // Update street value
              />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input
                type="text"
                placeholder="Search"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)} // Update property type value
              />
            </div>

            {/* The button with type="submit" */}
            <button className="btn1" type="submit">
              <i className="fa fa-search"></i> Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
