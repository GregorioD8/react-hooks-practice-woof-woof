import React from "react"

function DogFilter({ onFilterClick, goodDogFilterOn }) {

    return (

        <div id="filter-div">
        <button 
        id="good-dog-filter"
        onClick={onFilterClick}
        >Filter good dogs: {goodDogFilterOn? "ON" : "OFF"}</button>
        
        </div>
    )
}

export default DogFilter