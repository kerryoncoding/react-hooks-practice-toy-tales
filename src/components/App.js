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

  function handleItemToRemove(itemId){
    console.log("clicked: ", itemId)
    fetch(`${URL}/${itemId}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then(data=> {
      let updatedList = toyArr.filter((card)=> card.id != itemId)
    setToyArr(updatedList)      
    })
  }

  function handleLikeUpdate(itemId, likes){
    let updatedLikes = likes + 1
    console.log("liked:", itemId)
    fetch(`${URL}/${itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
      likes: updatedLikes
      }),
    })
    .then(res=>res.json())
    .then(data => {
      console.log("data:", data)
      let updatedArr = toyArr.map((item)=> (itemId==item.id) ? data : item)
      setToyArr(updatedArr)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArr={toyArr} handleItemToRemove={handleItemToRemove} handleLikeUpdate={handleLikeUpdate} />
    </>
  );
}

export default App;
