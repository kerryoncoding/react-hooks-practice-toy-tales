import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArr, handleItemToRemove}) {

  console.log(toyArr)

  // function handleDelete(){
  //   console.log("here", item.id)

  // }

  let showCollection = toyArr.map((item)=> {
    return <ToyCard
    id= {item.id}
    key= {item.id}
    name= {item.name}
    image= {item.image}
    likes= {item.likes}
    handleItemToRemove={handleItemToRemove}
    />
  })

  return (
    <div id="toy-collection">{showCollection}</div>
  );
}

export default ToyContainer;
