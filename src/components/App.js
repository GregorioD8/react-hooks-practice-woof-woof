import React, { useState, useEffect } from "react";
import DogBar from "./DogBar"
import DogSummary from "./DogSummary"
import DogFilter from "./DogFilter"


const API = "http://localhost:3001/pups"

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState(null)
  const [goodDogFilterOn, setGoodDogFilterOn] = useState(false)

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setDogs(data))
  }, [])


  function onUpdateDog(doggo) {

    const updatedDogs = dogs.map((d) => d.id === doggo.id ? doggo : d)
    setDogs(updatedDogs)
    setSelectedDog(doggo)
  }
  function handleToggleFilter() {
    setGoodDogFilterOn(!goodDogFilterOn)
  }
  
  
  function handleSelect(doggo) {
    setSelectedDog(doggo)
  }
  
  const visibleDogs = dogs.filter((d) => goodDogFilterOn? d.isGoodDog: d)
  


  return (
    <div className="App">

      <DogFilter
        onFilterClick={handleToggleFilter}
        goodDogFilterOn={goodDogFilterOn}
      />

      <DogBar
        dogs={visibleDogs}
        onSelectDog={handleSelect}
      />

      <DogSummary
        dog={selectedDog}
        onUpdateDog={onUpdateDog}

      />
    </div>

  );
}

export default App;
