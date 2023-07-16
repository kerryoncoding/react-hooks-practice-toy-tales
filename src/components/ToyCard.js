import React from "react";

function ToyCard({id, name, image, likes, handleItemToRemove, handleLikeUpdate}) {

  function handleDelete(){
    console.log(id)
    handleItemToRemove(id)
  }

  function handleLike(){
    handleLikeUpdate(id, likes)
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
      <button className="like-btn" onClick={handleLike}>Like ♥</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
