import React from "react";
import l from '../../OSStr5/Kabped/Kabped.module.css';


const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
   <div className={l.poiskglav}>
     <input className={l.poisk}
      type="text"
      placeholder="Введите название"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
  );
};

export default SearchInput;