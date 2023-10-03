import React from "react"

function DogSummary( { dog, onUpdateDog} ) {

    if (!dog) return null
    const { name, image, isGoodDog} = dog
    
    function handleClick(e) {
        fetch(`http://localhost:3001/pups/${dog.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isGoodDog: !(isGoodDog),})
          })
          .then((res) => res.json())
          .then(onUpdateDog)
          console.log(dog.isGoodDog)
        }
    
  



    return (
        <div id="dog-summary-container">
        <h1>DOGGO:</h1>
       <div id="dog-info">
            <img src={image} alt="Mr. Bonkers" />
            <h2>{name}</h2>
          <button onClick={handleClick}>{isGoodDog? "Good" : "Bad"} Dog!</button>
            
            
       </div>
    </div>

    )
        }

export default DogSummary