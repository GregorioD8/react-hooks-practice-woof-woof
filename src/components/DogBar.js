import React from "react"
import Dog from "./Dog"

function DogBar({ dogs, onSelectDog }) {

const viewableDogs = dogs.map((d) => (
    <Dog
    key={d.id}
    dog={d}
    onSelectDog={onSelectDog}
    />
))
    return (
        <div id="dog-bar">
         
         {viewableDogs}

         </div>
        
       
    )
}

export default DogBar