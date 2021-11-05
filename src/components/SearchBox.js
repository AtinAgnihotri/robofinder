import React from "react";


const SearchBox = ({ searchField, searchChange }) => {
   return (
        <div className="pa2">
            <input 
                type="search" 
                name="" 
                id="" 
                placeholder="Search Robot" 
                className = "pa3 ba b--green bg-lightest-blue"
                onChange={searchChange}
            />
       </div>
    
   );
}

export default SearchBox;