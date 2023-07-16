import React from "react";

function ToyCard({id, name, image, likes, handleItemToRemove}) {

  function handleDelete(){
    console.log(id)
    handleItemToRemove(id)
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like ♥</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
