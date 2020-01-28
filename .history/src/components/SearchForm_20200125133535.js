import React, { useState } from "react";

export default function SearchForm() {
  
  const [search,setSearch] = useState({name: ""});

  const handleUserChange = e => { 
    console.log("changed", e.target.name, e.target.value);
    setSearch({...search, [e.target.name]: e.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(search);
  };
  return (
    <section className="search-form">
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="search">
          Search:
          <input
            id="search"
            // name="search"
             placeholder="Search Here"
            // value={search.name}
             onChange={handleUserChange}
            type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
