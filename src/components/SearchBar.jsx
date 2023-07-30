import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const onSubmitHandler = (e)=>{
      e.preventDefault();
      if(searchTerm){
        navigate(`/Youtube-Clone/search/${searchTerm}`);
        setSearchTerm('');
      }
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="searchBox">
          <input type="text" placeholder="Search for..." value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
          <button type="submit"><span className="material-symbols-outlined">search</span></button>
      </div>  
    </form>
  );
};

export default SearchBar;
