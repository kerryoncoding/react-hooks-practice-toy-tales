import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const URL  = "http://localhost:3001/toys"

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArr, setToyArr] = useState([])

  useEffect(()=> {
    fetch(URL)
    .then(res=> res.json())
    .then(data => setToyArr(data))
  },[])



  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(toyInfo){
    console.log("new toy here", toyInfo)
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyInfo)
    })
    .then(res=> res.json())
    .then(data=> setToyArr([...toyArr, toyInfo]))
  }

  function handleItemToRemove(item){
    console.log("clicked: ", item)
    fetch(`${URL}/${item}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then(data=> {
      let updatedList = toyArr.filter((card)=> card.id != item)
    setToyArr(updatedList)      
    })
  }

  function removeItemFromList(itemId){
    let updatedList = toyArr.filter((item)=> item.id != itemId)
    setToyArr(updatedList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArr={toyArr} handleItemToRemove={handleItemToRemove} />
    </>
  );
}

export default App;
