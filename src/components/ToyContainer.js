import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArr}) {

  console.log(toyArr)

  let showCollection = toyArr.map((item)=> {
    return <ToyCard
    id= {item.id}
    key= {item.id}
    name= {item.name}
    image= {item.image}
    likes= {item.likes}
    />
  })

  return (
    <div id="toy-collection">{showCollection}</div>
  );
}

export default ToyContainer;
