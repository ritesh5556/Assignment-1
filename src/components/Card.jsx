import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  var random = props.name;
  var avatarLink = `https://avatars.dicebear.com/v2/avataaars/${random}.svg?options[mood][]=happy`;

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{random}</h2>
        <Avatar img={avatarLink} />
      </div>
      <div className="bottom">
      <p>Email:</p>
        <Detail detailInfo={props.email} />
        <p>Phone:</p>
        <Detail detailInfo={props.tel} />
        <p>company:</p>
        <Detail detailInfo={props.company} />

        <p>Website:</p>
        <Detail detailInfo={props.website} />
        <p>Address:</p>
        <Detail detailInfo={props.street} />
        <Detail detailInfo={props.suite} />
        <Detail detailInfo={props.city} />
      </div>
    </div>
  );
}

export default Card;
